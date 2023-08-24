
const BigNumber = require('bignumber.js');
const env = require('dotenv');
const { Reward } = require('../models');
const { CALL } = require('../utils/api');
const { signHex } = require('../utils/blockchain');

env.config();
const REWARD_WALLET_ADDRESS = process.env.REWARD_WALLET_ADDRESS;
const REWARD_WALLET_PEIVATE_KEY = process.env.REWARD_WALLET_PEIVATE_KEY;
let processing = {};

const processReward = (req, res, next) => {
	const cid = req.params.rid;
	const wid = req.params.wid;
	if (processing[cid]){
		res.status(200).json({ 'error': 'inProgress' });
		return;
	}
	processing[cid] = true;

	return Reward.findOne({
		where: {
			reward_code: cid,
			claimed_at: null
		},
	}).then(async (reward) => {
	
		if (!reward || reward.reward_amout <= 0){
			return {'error':'notValid'};
		}
		if(reward.claimed_at){
			return {'error':'alreadyClamed'};
		}
		try {
			let rewardVal = new BigNumber(reward.reward_amout);

			const reansferRes = await transferToAddress(wid, rewardVal.toString());
			if (reansferRes === 'true') {
				reward.claimed_at = new Date().toISOString();
				await reward.save();
			}
			return { 'result': 'ok' };
		} catch (err) {
			return { 'error': err.toString() };
		}
	}).then((result) => {
		res.status(200).json(result);
	}).catch(err => {
		res.status(500).json(err);
		console.log(err);
	}).then(()=>{
		delete processing[cid];
	})
}

const transferToAddress = (destAddress, amount) => {
	const pvKey = REWARD_WALLET_PEIVATE_KEY;

	const parameter = {
		from: REWARD_WALLET_ADDRESS,
		address: destAddress,
		amount: amount,
		network: ''
	};
	return transferRequest(pvKey, parameter).then((response) => {
		return transferSign(response, pvKey, parameter);
	}).then((response) => {
		return transferCommit(response, pvKey, parameter);
	});
}

const transferRequest = (pvKey, parameter, tryCount = 0) => {
	return CALL('wallet/transfer/request', { data: parameter }).then((response) => {
		if (!response || !response.result) throw (response);
		return response.result;
	}).catch(() => {
		if (tryCount >= 0) throw (new Error('Transfer request failed'));
		return transferRequest(pvKey, parameter, tryCount + 1);
	})
}

const transferSign = async (contract, pvKey, parameter, tryCount = 0) => {
	const signedContract = await signHex(contract, pvKey);
	return CALL('wallet/transfer/sign', { data: { sign: signedContract, ...parameter } }).then((response) => {
		if (!response || !response.result) throw (response);
		return response.result;
	}).catch((err) => {
		if (tryCount >= 0) throw (new Error(`Transfer sign failed: ${err}`));
		return transferSign(signedContract, pvKey, parameter, tryCount + 1);
	})
}

const transferCommit = (signature, pvKey, parameter, tryCount = 0) => {
	const commitSignature = signHex(signature, pvKey);
	return CALL('wallet/transfer/commit', { data: { sign: commitSignature, ...parameter } }).then((result) => {
		if (!result || result.result != 'true') throw (result);
		return result.result;
	}).catch(() => {
		if (tryCount >= 0) throw (new Error('Transfer commit failed'));
		return transferCommit(signature, pvKey, parameter, tryCount + 1);
	});
}

const _transferFee = (value) =>{
	if (value.isGreaterThan(1000)) {
		return 10;
	}
	else if (value.isLessThan(100)) {
		return value.multipliedBy(0.005);
	}
	return value.multipliedBy(0.01);
}

module.exports = {
	processReward,
};

const axios = require('axios');
const env = require('dotenv');

env.config();
const API_BASE = process.env.WALLET_API_BASE_ADDRESS;

const CALL = (endpoint, { params = null, data = null } = {}) => {
    let url = `${API_BASE}/${endpoint}`;
    if (params) {
        url += `?${params}`;
    }

    return axios.post(url, data).then((res) => {
        if (!res || !res.data) throw res;
        return res.data;
    }).catch((err) => {
        return err && err.message ? err.message : err;
    });
}

module.exports ={
    CALL,
}
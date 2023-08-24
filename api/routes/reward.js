const express = require('express');
const router = express.Router();
const RewardController = require('../app/controllers/rewardController');


router.route('/claim/:rid/:wid').post(RewardController.processReward);


module.exports = router;
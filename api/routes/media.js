const express = require('express');
const router = express.Router();
const MediaController = require('../app/controllers/media');


router.route('/list').get(MediaController.getVideoList);
router.route('/info/:id').get(MediaController.getVideoInfo);


module.exports = router;
const express = require('express');
const router = express.Router();
const contactController = require('../app/controllers/contactController');


router.route('/form').post(contactController.processForm);


module.exports = router;
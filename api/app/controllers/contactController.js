
const env = require('dotenv');
const { Contact } = require('../models');

env.config();

const processForm = async (req, res, next) => {
  const { name, email, message } = req.body;
  await Contact.create({ name, email, message });
  res.status(200).json({ result: 'ok' })
}


module.exports = {
  processForm,
};

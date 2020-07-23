const mongoose = require('mongoose');

module.exports = mongoose.model('Users', new mongoose.Schema({ name: String }));
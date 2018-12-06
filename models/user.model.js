const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    code: Number,
    first_name: String,
    last_name: String,
    phone_no: String,
    isActive: Boolean
});

module.exports = mongoose.model('User', userSchema);
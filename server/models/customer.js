var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
    date: String,
    expense: String,
    category: String,
    value: String
});

module.exports = mongoose.model('Customer', customerSchema);
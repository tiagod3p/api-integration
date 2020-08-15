const mongoose = require('mongoose')

module.exports = mongoose.model("Deal", new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    person_name: {type: String, required: true},
    org_name: {type: String, required: true},
    deal_title: {type: String, required: true},
    deal_value: {type: String, required: true},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
}))
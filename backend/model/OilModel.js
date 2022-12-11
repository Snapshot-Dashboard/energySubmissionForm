const mongoose = require('mongoose')

const OilSchema = new mongoose.Schema({
    Category: {
        type: String,
        required: true
    },
    DateOfData: {
        type: String,
        required: true
    },
    Value: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Oil', OilSchema)
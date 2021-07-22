const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    sku: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const ItemSchema = model('ItemSchema', itemSchema);

module.exports = ItemSchema;
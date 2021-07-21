const { Decimal128 } = require('bson');
const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    id: {
        //
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
        type: Decimal128,
        required: true,
    }
});

const ItemSchema = model('ItemSchema', itemSchema);

module.exports = ItemSchema;
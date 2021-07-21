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
        type: 
    }
    // more item info
    // ie: id 
});

const ItemSchema = model('ItemSchema', itemSchema)

module.exports = ItemSchema;
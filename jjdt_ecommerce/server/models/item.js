const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    keywords: {
        type: String,
        // instead of categories for user to choose from 
    },
    description: {
        type: String,
        required: true,
    }
});

const ItemSchema = model('ItemSchema', itemSchema)

module.exports = ItemSchema;
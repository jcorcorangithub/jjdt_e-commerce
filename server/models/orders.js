const { Schema, model } = require('mongoose');

const orderSchema = new Schema({

    purchaseDate: {
        type: Date,
        default: Date.now
    },

//what exactly is going on here ///////
    products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product' 
        }
    ],
//what exactly is going on here ///////

    shippingInfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
    },

    //orderPrice: {},
});
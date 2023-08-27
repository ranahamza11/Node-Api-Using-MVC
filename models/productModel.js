const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Nmae of the product required"]
        },
        quantity: {
            type: Number,
            required: true,
            defualt: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false
        } 

    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
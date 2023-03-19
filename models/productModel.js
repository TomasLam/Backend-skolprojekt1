const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: false,
        },
        name: {
            type: String,
            requred: true,
        },
        price: {
            type: Number,
            requred: true,
        },
        quantity: {
            type: Number,
            requred: true,
            default:0
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
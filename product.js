const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('connection open!');
    })
    .catch((e) => {
        console.log('oh no error');
        console.log(e);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be +ve']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        inStore: {
            type: Number,
            default: 0
        },
        online: {
            type: Number,
            default: 0
        }
    },
    categories: [String],
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log("Hi how're you");
}

const Product = mongoose.model('Product', productSchema);

// const chips = new Product({ name: 'Cheetos', price: 20, qty: { inStore: 500, online: 500 }, categories: 'Cheesy' });
// chips.save()
//     .then(data => {
//         console.log('it worked');
//         console.log(data);
//     })
//     .catch(e => {
//         console.log('oops! error:', e);
//     })

// Product.findOneAndUpdate({ name: 'Cheetos' }, { price: -30 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('it worked');
//         console.log(data);
//     })
//     .catch(e => {
//         console.log('oops! error:', e);
//     })
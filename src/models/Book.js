const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title']
    },
    author: {
        type: String,
        required: [true, 'Please enter your name']
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);

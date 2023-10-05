const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title']
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: [true, 'Please enter your name']
    },
    publishedDate: {
        type: Date,
        default: Date.now, 
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);

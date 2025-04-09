const mongoose = require("mongoose");


require("dotenv").config();  

const MONGO_URI = "add your link";
mongoose.connect(MONGO_URI);


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = {
    User,
    Book
};

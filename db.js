const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://agarwalreet15:Kamboj%40149@cluster0.x5ju7.mongodb.net/bookstore");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    rating: Number,
    publishedDate: Date
});

const User = mongoose.model("User", userSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = {
    User,
    Book
};

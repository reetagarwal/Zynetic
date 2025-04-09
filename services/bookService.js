const { Book } = require("../db");

async function createBook(data) {
    return await Book.create(data);
}

async function getAllBooks() {
    return await Book.find();
}

async function getBookById(id) {
    return await Book.findById(id);
}

async function updateBook(id, data) {
    return await Book.findByIdAndUpdate(id, data, { new: true });
}

async function deleteBook(id) {
    return await Book.findByIdAndDelete(id);
}

async function searchBooks(query) {
    const { author, category, rating, title } = query;
    const filter = {};
    if (author) filter.author = author;
    if (category) filter.category = category;
    if (rating) filter.rating = rating;
    if (title) filter.title = { $regex: title, $options: "i" };
    return await Book.find(filter);
}

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook, searchBooks };

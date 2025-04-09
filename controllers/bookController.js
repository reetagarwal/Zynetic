const zod = require("zod");
const bookService = require("../services/bookService");

const bookSchema = zod.object({
    title: zod.string(),
    author: zod.string(),
    category: zod.string(),
    price: zod.number(),
    rating: zod.number().min(0).max(5),
    publishedDate: zod.string()
});

async function create(req, res) {
    const { success } = bookSchema.safeParse(req.body);
    if (!success) return res.status(400).json({ message: "Invalid book data" });

    const book = await bookService.createBook(req.body);
    res.status(201).json({ message: "Book created", book });
}

async function getAll(req, res) {
    const books = await bookService.getAllBooks();
    res.json({ books });
}

async function getOne(req, res) {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ book });
}

async function update(req, res) {
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book updated", book });
}

async function remove(req, res) {
    const book = await bookService.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
}

async function search(req, res) {
    const books = await bookService.searchBooks(req.query);
    res.json({ books });
}

module.exports = { create, getAll, getOne, update, remove, search };

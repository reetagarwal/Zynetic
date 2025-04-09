const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/books", bookRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

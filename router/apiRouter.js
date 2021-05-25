const apiRouter = require("express").Router();
const { Book } = require("../models");

apiRouter.post("/books", async (req, res) => {
  try {
    const { title, authors, description, image, link } = req.body;
    const book = await Book.create({
      title,
      authors,
      description,
      image,
      link,
    });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

apiRouter.get("/books", async (req, res) => {
  try {
    const book = await Book.find(req.query);
    res.json(book);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

apiRouter.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.deleteOne({ id: req.params.id });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

module.exports = apiRouter;

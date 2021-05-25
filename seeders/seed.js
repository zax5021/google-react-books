let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/google_books_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

let bookSeed = [
  {
    title: "harry potter",
    authors: ["JK Rowling"],
    description: "epic tale of a wizard",
    image: "https://place-puppy.com/300x300",
    link: "https://www.google.com",
  },
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

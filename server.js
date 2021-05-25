const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const appRouter = require("./router");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google_books_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(appRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

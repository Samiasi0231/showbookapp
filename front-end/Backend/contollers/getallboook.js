const Book = require("../models/bookmodel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
  

    if (!books) {
      console.log("Error fetching books");
      return res.status(404).json({ message: "Books not found" });
    }

    return res.status(200).json({
      statusText: "Successfully fetched all books...",
      data: books,
    
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllBooks;

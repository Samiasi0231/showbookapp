const Book = require("../models/bookmodel");

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you're passing the book ID in the URL
    
    const book = await Book.findById(id);
  console.log(book)
    if (!book) {
      console.log("Error fetching book");
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({
      statusText: "Successfully fetched one book...",
      data: book,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getOneBook;

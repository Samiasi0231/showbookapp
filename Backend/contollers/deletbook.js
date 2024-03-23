const Book = require("../models/bookmodel");

const deleteBook = async (req, res) => {
  try {
    const itemid = req.params.id; // Assuming you're passing the book ID in the URL
    
    // Find the book to delete
    const bookToDelete = await Book.findById( itemid);
    
    if (!bookToDelete) {
      console.log("Error fetching book");
      return res.status(404).json({ message: "Book not found" });
    }

    // Delete the book
    const deletedBook = await Book.findByIdAndDelete(itemid);

    // Log the deleted book
    console.log("Deleted Book:", bookToDelete);

    // Return the deleted book in the response
    return res.status(200).json({
      statusText: "Successfully deleted book...",
      data: deletedBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteBook;

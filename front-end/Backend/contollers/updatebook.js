const Book = require("../models/bookmodel");

const updateBook = async (req, res) => {
  try {
    const { id } = req.params; 
    
    // Fetch the existing book
    const existingBook = await Book.findById(id);
    
    if (!existingBook) {
      console.log("Error fetching book");
      return res.status(404).json({ message: "Book not found" });
    }

    // Update the book with the request body
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

 

    // Return the updated book in the response
    return res.status(200).json({
      statusText: "Successfully updated book...",
      data:existingBook,
      data: updatedBook,
      
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateBook;


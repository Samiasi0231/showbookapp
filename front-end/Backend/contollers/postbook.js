const Book = require("../models/bookmodel")


const saveBook = async (req, res) => {
    try {
     
        const {title,publishYear,author} = req.body;
    console.log(req.body)
        const alreadyExisting = await Book.findOne({ title });
        if (alreadyExisting) {
            return res.status(400).json({ message: "This user account already exists!" });
        }
    
        const newBook = await Book.create({
            author,publishYear,title
        });
        return res.status(200).json({ message: "Book created successfully",data: newBook });
    } catch (error) {
        console.error("Error in Saving a newBook:", error);
        return res.status(500).json({ message: "Failed to create user. Please try again later." });
    }
    
}
module.exports = saveBook
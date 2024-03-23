
const express = require("express");
const getAllBooks =require("../contollers/getallboook")
const saveBook = require("../contollers/postbook")
const getOneBook= require("../contollers/getonebook")
const updateBook =require("../contollers/updatebook")
const deleteBook= require("../contollers/deletbook")
const router = express.Router();


router.post("/postbook", saveBook );
router.get("/getallbook", getAllBooks)
router.get("/getonebook/:id", getOneBook) 
router.put("/updatebook/:id", updateBook)
router.delete("/delete/:id", deleteBook)



module.exports = router;
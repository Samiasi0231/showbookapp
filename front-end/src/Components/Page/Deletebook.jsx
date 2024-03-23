import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import Spinner from "../Docum/Spinner";
import Backbutton from "../Docum/Backbutton";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/api/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar(" Book Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(" Error", { variant: "Error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 ">
      <Backbutton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are sure you want to delete this book</h3>
      </div>
      <button
        className="p-4 bg-red-600 text-white m-8 w-full"
        onClick={handleDeleteBook}
      >
        Yes Delete
      </button>
    </div>
  );
};

export default DeleteBook;

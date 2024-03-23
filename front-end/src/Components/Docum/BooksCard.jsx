import React from "react";
import Singlecard from "./Singlecard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((item) => (
        <Singlecard key={item._id} book={item} className="text-sm" />
      ))}
    </div>
  );
};

export default BooksCard;

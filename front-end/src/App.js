import React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Createbook from"./Components/Page/Craetebook"
import DeleteBook from "./Components/Page/Deletebook"
import Editbook from "./Components/Page/Editbook"
import Home from "./Components/Page/Home"
import Showbook  from "./Components/Page/Showbook"

function App() {



  return (
<div>


    <BrowserRouter>
    <Routes>
  
     
       <Route  path="/books/create"element={<Createbook/> }/>  
       <Route  path="/books/delete/:id"element={< DeleteBook/> }/>  
       <Route  path="/books/edit/:id"element={<Editbook/> }/>
       <Route  path="/"element={< Home/> }/>  
       <Route  path="/books/details/:id"element={< Showbook/> }/>  
      
       
       </Routes>
  </BrowserRouter>
  </div>

  );
}

export default App;


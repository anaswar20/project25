import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Product from "./product/Product";
import Book from "./components/book/Book";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/book" element={<Book/>}></Route>

  
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;

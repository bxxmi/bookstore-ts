import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBooks from "./components/AddBooks";
import SignIn from "./components/SignIn";
import DetailBook from "./components/DetailBook";
import EditBook from "./components/EditBook";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add" element={<AddBooks />} />
        <Route path="/book/:id" element={<DetailBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        {/* 404 page */}
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

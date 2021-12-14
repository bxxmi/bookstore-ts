import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBooks from "./components/AddBooks";
import SignIn from "./components/SignIn";
import DetailBook from "./components/DetailBook";
import EditBook from "./components/EditBook";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/book/:id" element={<DetailBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AddBooks from "./routes/AddBooks";
import SignIn from "./routes/SignIn";
import DetailBook from "./routes/DetailBook";
import EditBook from "./routes/EditBook";
import NotFound from "./routes/NotFound";
import Error from "./routes/Error";
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

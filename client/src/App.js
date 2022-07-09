import React, { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import CreatorsPage from "./pages/CreatorsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div className="background">
      <Header setCurrentPage={setCurrentPage}></Header>
      {currentPage === "About" && <About></About>}
      {currentPage === "Creators" && <CreatorsPage></CreatorsPage>}
      {currentPage === "Contact" && <ContactPage></ContactPage>}
    </div>
  );
}

export default App;

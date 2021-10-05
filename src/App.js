import React, { useState } from "react";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
// import ContactForm from "./components/Contact";

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav></Nav>
      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;

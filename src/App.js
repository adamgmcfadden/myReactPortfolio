import React, { useState } from "react";
import Nav from "./components/Navigation";
// import ContactForm from "./components/Contact";

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav></Nav>

      {/* <main>
        <div>
          {!contactSelected ? (
            <>
              <Project>Projects here</Project>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <Footer>Footer Here</Footer> */}
    </div>
  );
}

export default App;

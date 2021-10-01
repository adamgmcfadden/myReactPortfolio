import React, { useState } from "react";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header>
        <Nav setContactSelected={setContactSelected}></Nav>
      </Header>
      <main>
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
      <Footer>Footer Here</Footer>
    </div>
  );
}

export default App;

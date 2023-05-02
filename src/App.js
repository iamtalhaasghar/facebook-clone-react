import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Homepage from "./components/Homepage";

import SignupModal from "./components/Signup";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Homepage setSignupModalShow={setModalShow}></Homepage>

      <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;

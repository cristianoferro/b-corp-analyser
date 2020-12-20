import { useState } from "react";
import Nav from "./components/Nav";
import ScreenCorpPresentation from "./components/ScreenCorpPresentation";
import data from "./data";

import "./styles/App.scss";

function App() {

  const [corps, setCorp] = useState(data());
  const [currentCorp, setCurrentCorp] = useState(corps[0]);
  
  return (
    <div className="App">
      <div className="background-test-ref"></div>
      <Nav />
      <ScreenCorpPresentation currentCorp={currentCorp}/>
    </div>
  );
}

export default App;

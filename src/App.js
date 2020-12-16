import { useState } from "react";
import CorpStats from "./components/CorpStats";
import Info from "./components/Info";
import Nav from "./components/Nav";
import NextIn from "./components/NextIn";
import data from "./data";

function App() {

  const [corps, setCorp] = useState(data());
  const [currentCorp, setCurrentCorp] = useState(corps[0]);

  return (
    <div className="App">
      <Nav />
      <Info currentCorp={currentCorp} />
      <CorpStats />
      <NextIn />
    </div>
  );
}

export default App;

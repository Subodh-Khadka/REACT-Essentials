import { useState } from "react";

import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import Examples from "./Components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

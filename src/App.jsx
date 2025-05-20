import { useState } from "react";

import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(tabContent);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>
          <div id="tabContent">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

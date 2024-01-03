import { useState } from "react";

import TabButton from "./TabButton";

export default function Examples({ examples }) {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleClick = (selectedValue) => {
    setSelectedTopic(selectedValue);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      <section>
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{examples[selectedTopic].title}</h3>
            <p>{examples[selectedTopic].description}</p>
            <pre>
              <code>{examples[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </section>
    </section>
  );
}

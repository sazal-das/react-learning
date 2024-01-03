import Header from "./components/header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./components/core-concept/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts coreConcepts={CORE_CONCEPTS} />
        <Examples examples={EXAMPLES} />
      </main>
    </>
  );
}

export default App;

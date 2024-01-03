import CoreConcept from "./CoreConcept";

export default function CoreConcepts({ coreConcepts }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {coreConcepts.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

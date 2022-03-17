import { useState } from "react";
import { Section } from "./Section";

export function Collipsible() {
  const [sections, setSections] = useState([
    { id: "1", collapsed: false },
    { id: "2", collapsed: true },
    { id: "3", collapsed: false },
  ]);

  return (
    <div>
      {sections.map((section) => {
        return (
          <Section
            key={section.id}
            id={section.id}
            collapsed={section.collapsed}
            setSections={setSections}
          />
        );
      })}
    </div>
  );
}

import { useState } from "react";

export function Section({ id, collapsed, setSections }) {
  /**
   * this section is the local state that has been deleted
   * const [collapsed, setCollapsed] = useState(true);
   */

  const handleCollapse = () => {
    setSections((previousSections) => {
      // transform each section into a new section
      return previousSections.map((section) => {
        if (section.id === id) {
          // if the id maches, we return a new section with the oposit collased variable
          return {
            ...section,
            collapsed: !collapsed,
          };
        } else {
          // else we return a new section with a collapsed variable equale to true
          return {
            ...section,
            collapsed: true,
          };
        }
      });
    });
  };

  return (
    <div className="section">
      <h2 className="section__title">
        title
        <button onClick={handleCollapse}>
          {collapsed ? "expand" : "collapse"}
        </button>
      </h2>
      {!collapsed && <p className="section__content">content</p>}
    </div>
  );
}

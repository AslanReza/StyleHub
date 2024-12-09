import React from "react";
import Divider from "../components/Divider";

const GridAdvanced = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        Advanced CSS Grid
      </h1>
      <p className="text-lg mb-4">
        CSS Grid allows for the creation of complex layouts with a
        two-dimensional grid system, offering more control over rows and columns
        than Flexbox.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`/* Grid container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item {
  grid-column: span 2;  /* Spans across two columns */
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use Grid when you need a more structured layout with precise control
        over the positioning of elements in both rows and columns.
      </p>
    </div>
  );
};

export default GridAdvanced;

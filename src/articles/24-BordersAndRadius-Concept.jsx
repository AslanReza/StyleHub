import React from "react";
import Divider from "../components/Divider";

const CSSBordersAndRadius = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Borders and Radius
      </h1>
      <p className="text-lg mb-4">
        The <code>border</code> property adds borders to elements, while{" "}
        <code>border-radius</code> is used to round the corners of elements.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.box {
  border: 5px solid #3498db;
  border-radius: 15px;
  padding: 20px;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use borders to define element boundaries, and border-radius to create
        rounded corners for a softer, modern look.
      </p>
    </div>
  );
};

export default CSSBordersAndRadius;

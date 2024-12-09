import React from "react";
import Divider from "../components/Divider";

const CSSFunctions = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Functions</h1>
      <p className="text-lg mb-4">
        CSS functions like <code>calc()</code>, <code>rgb()</code>, and{" "}
        <code>var()</code> allow for dynamic styling, calculation, and
        reusability.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`p {
  font-size: calc(16px + 2vw);
  color: rgb(255, 0, 0);
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use functions for responsive designs, calculations, or when reusing
        values across your stylesheet.
      </p>
    </div>
  );
};

export default CSSFunctions;

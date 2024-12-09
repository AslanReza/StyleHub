import React from "react";
import Divider from "../components/Divider";

const CSSShadows = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Shadows</h1>
      <p className="text-lg mb-4">
        The <code>box-shadow</code> and <code>text-shadow</code> properties are
        used to create shadow effects on elements and text.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.box {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use shadows to create depth and make UI elements stand out, such as
        buttons, cards, or text.
      </p>
    </div>
  );
};

export default CSSShadows;

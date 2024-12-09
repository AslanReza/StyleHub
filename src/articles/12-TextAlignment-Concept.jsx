import React from "react";
import Divider from "../components/Divider";

const TextAlign = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Text Align</h1>
      <p className="text-lg mb-4">
        The <code>text-align</code> property in CSS specifies the horizontal
        alignment of text within its container.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Common Values
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>left</strong> (default): Aligns text to the left.
        </li>
        <li>
          <strong>right</strong>: Aligns text to the right.
        </li>
        <li>
          <strong>center</strong>: Centers the text.
        </li>
        <li>
          <strong>justify</strong>: Stretches text so it aligns evenly on both
          sides.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`p {
  text-align: center;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use <code>text-align</code> to improve text readability and layout
        aesthetics, particularly in headers, footers, and content blocks.
      </p>
    </div>
  );
};

export default TextAlign;

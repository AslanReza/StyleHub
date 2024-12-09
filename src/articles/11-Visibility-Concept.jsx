import React from "react";
import Divider from "../components/Divider";

const Visibility = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Visibility</h1>
      <p className="text-lg mb-4">
        The <code>visibility</code> property in CSS determines whether an
        element is visible or hidden without affecting its layout.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Visibility Values
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>visible</strong> (default): The element is fully visible.
        </li>
        <li>
          <strong>hidden</strong>: The element is hidden but still takes up
          space in the layout.
        </li>
        <li>
          <strong>collapse</strong>: For table elements, it removes the row or
          column but retains the layout.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  visibility: hidden;
}`}</code>
      </pre>

      <p className="text-lg mb-4">
        In this case, the <code>div</code> will be invisible but still occupy
        space.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Difference Between Visibility and Display
      </h2>
      <p className="text-lg mb-4">
        Unlike <code>display: none</code>, <code>visibility: hidden</code> keeps
        the element in the document flow.
      </p>
    </div>
  );
};

export default Visibility;

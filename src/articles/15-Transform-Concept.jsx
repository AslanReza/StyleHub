import React from "react";
import Divider from "../components/Divider";

const Transform = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Transform</h1>
      <p className="text-lg mb-4">
        The <code>transform</code> property allows you to rotate, scale, skew,
        or translate elements.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Transform Functions
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>rotate()</strong>: Rotates the element by a specified angle.
        </li>
        <li>
          <strong>scale()</strong>: Resizes the element.
        </li>
        <li>
          <strong>translate()</strong>: Moves the element along the X and/or Y
          axis.
        </li>
        <li>
          <strong>skew()</strong>: Skews the element along the X and/or Y axis.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  transform: rotate(45deg) scale(1.2);
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This example rotates the <code>div</code> 45 degrees and scales it by
        1.2 times.
      </p>
    </div>
  );
};

export default Transform;

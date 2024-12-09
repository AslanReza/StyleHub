import React from "react";
import Divider from "../components/Divider";

const Overflow = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Overflow</h1>
      <p className="text-lg mb-4">
        The <code>overflow</code> property in CSS controls what happens to
        content that exceeds the dimensions of its container.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Common Overflow Values
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>visible</strong> (default): Content overflows the container
          without clipping.
        </li>
        <li>
          <strong>hidden</strong>: Content exceeding the container is clipped
          and not visible.
        </li>
        <li>
          <strong>scroll</strong>: Content exceeding the container is clipped,
          but scrollbars appear to view the hidden content.
        </li>
        <li>
          <strong>auto</strong>: Behaves like <code>scroll</code> if the content
          exceeds, otherwise no scrollbars.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 200px;
  height: 100px;
  overflow: hidden;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Practical Uses
      </h2>
      <p className="text-lg mb-4">
        Use <code>overflow</code> to manage layouts with dynamic content, such
        as scrolling lists or fixed-height containers.
      </p>
    </div>
  );
};

export default Overflow;

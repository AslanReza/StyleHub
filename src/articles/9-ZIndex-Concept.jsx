import React from "react";
import Divider from "../components/Divider";

const ZIndex = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Z-Index</h1>
      <p className="text-lg mb-4">
        The <code>z-index</code> property in CSS controls the stacking order of
        elements. It determines which elements appear on top of others when they
        overlap.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        How Z-Index Works
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          The higher the <code>z-index</code> value, the closer the element is
          to the front.
        </li>
        <li>
          Only works on elements with a position value of <code>relative</code>,{" "}
          <code>absolute</code>, or <code>fixed</code>.
        </li>
        <li>Negative values move elements behind others.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div.one {
  position: absolute;
  z-index: 1;
}

div.two {
  position: absolute;
  z-index: 2;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this case, <code>div.two</code> will appear on top of{" "}
        <code>div.one</code>.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use Z-Index
      </h2>
      <p className="text-lg mb-4">
        Use <code>z-index</code> to control layering in scenarios like dropdown
        menus, modals, or overlapping elements.
      </p>
    </div>
  );
};

export default ZIndex;

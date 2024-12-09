import React from "react";
import Divider from "../components/Divider";

const CSSDisplay = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Display</h1>
      <p className="text-lg mb-4">
        The <code>display</code> property in CSS controls the layout behavior of
        elements. It defines how an element is rendered and how it interacts
        with other elements.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Common Display Values
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. block</h3>
      <p className="text-lg mb-4">
        The element takes up the full width available and starts on a new line.
        Examples:
        <code>div</code>, <code>p</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. inline</h3>
      <p className="text-lg mb-4">
        The element flows with surrounding content and doesn’t start on a new
        line. Examples:
        <code>span</code>, <code>a</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        3. inline-block
      </h3>
      <p className="text-lg mb-4">
        Behaves like an inline element but allows setting width and height.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">4. flex</h3>
      <p className="text-lg mb-4">
        Activates Flexbox for the element. It becomes a flex container.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">5. grid</h3>
      <p className="text-lg mb-4">
        Activates Grid Layout for the element. It becomes a grid container.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">6. none</h3>
      <p className="text-lg mb-4">
        Hides the element completely. It is removed from the document flow.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Examples of Display modes</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`/* Block Example */
div {
  display: block;
}

/* Inline Example */
span {
  display: inline;
}

/* Flex Example */
container {
  display: flex;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Why Understanding Display is Important
      </h2>
      <p className="text-lg mb-4">
        The <code>display</code> property is foundational for web layouts. By
        mastering it, you gain full control over how elements are rendered and
        interact with each other.
      </p>
    </div>
  );
};

export default CSSDisplay;

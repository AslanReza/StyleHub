import React from "react";
import Divider from "../components/Divider";

const Positioning = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Positioning</h1>
      <p className="text-lg mb-4">
        CSS Positioning is a technique that allows you to control the placement
        of elements on a webpage. By understanding and using different positioning
        properties, you can create layouts that adapt to user needs and device constraints.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Position Property
      </h2>
      <p className="text-lg mb-4">
        The <code>position</code> property in CSS determines how an element is
        positioned in the document flow. It has several values that you can use
        to control the element's behavior:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li><strong>static</strong>: The default positioning for all elements.</li>
        <li><strong>relative</strong>: Positions the element relative to its normal position.</li>
        <li><strong>absolute</strong>: Positions the element relative to its nearest positioned ancestor.</li>
        <li><strong>fixed</strong>: Positions the element relative to the viewport.</li>
        <li><strong>sticky</strong>: A hybrid of relative and fixed positioning.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Types of Positioning</h2>

      {/* Static Positioning */}
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. Static</h3>
      <p className="text-lg mb-4">
        This is the default positioning. Elements are positioned according to
        the normal document flow, without being affected by any offset properties.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: static;
}`}</code>
      </pre>
      <p className="text-lg mb-4">Elements with <code>position: static</code> don’t respond to properties like <code>top</code>, <code>left</code>, <code>right</code>, or <code>bottom</code>.</p>

      {/* Relative Positioning */}
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. Relative</h3>
      <p className="text-lg mb-4">
        The element is positioned relative to its normal position. Offsets like
        <code>top</code>, <code>left</code>, <code>right</code>, and <code>bottom</code> move it from its original spot.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: relative;
  top: 10px;
  left: 15px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This shifts the element 10px down and 15px to the right, but the space
        it originally occupied remains.
      </p>

      {/* Absolute Positioning */}
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">3. Absolute</h3>
      <p className="text-lg mb-4">
        The element is positioned relative to the nearest positioned ancestor
        (an ancestor with <code>position</code> set to relative, absolute, or
        fixed). If no such ancestor exists, it positions relative to the <code>html</code> element.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: absolute;
  top: 20px;
  left: 30px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This moves the element 20px from the top and 30px from the left of its
        containing block.
      </p>

      {/* Fixed Positioning */}
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">4. Fixed</h3>
      <p className="text-lg mb-4">
        The element is positioned relative to the viewport, and it doesn’t move
        when the page is scrolled.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: fixed;
  bottom: 10px;
  right: 20px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This places the element 10px above the bottom and 20px from the right of the viewport.
      </p>

      {/* Sticky Positioning */}
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">5. Sticky</h3>
      <p className="text-lg mb-4">
        Sticky positioning toggles between relative and fixed, depending on the
        scroll position. The element is treated as relative until it reaches a
        defined scroll threshold, at which point it becomes fixed.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: sticky;
  top: 0;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This makes the element stick to the top of the viewport when scrolled
        to its position.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Understanding Z-Index
      </h2>
      <p className="text-lg mb-4">
        The <code>z-index</code> property controls the stack order of elements.
        Higher values are placed in front of elements with lower values. This is
        particularly useful when using positioning to layer elements.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  position: relative;
  z-index: 10;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the element will appear above other elements with a
        lower <code>z-index</code>.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Why Positioning is Important
      </h2>
      <p className="text-lg mb-4">
        CSS positioning is critical for creating responsive, interactive layouts.
        It allows you to layer, align, and organize elements with precision,
        making it a cornerstone of web design.
      </p>
    </div>
  );
};

export default Positioning;

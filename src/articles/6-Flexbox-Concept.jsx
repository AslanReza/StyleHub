import React from "react";
import Divider from "../components/Divider";

const Flexbox = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Flexbox</h1>
      <p className="text-lg mb-4">
        CSS Flexbox (Flexible Box) is a layout model designed to distribute space 
        along a single axis (horizontal or vertical) and provide alignment capabilities 
        for container items. Flexbox makes creating responsive and dynamic layouts 
        much simpler than traditional methods.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Flexbox Concepts
      </h2>
      <p className="text-lg mb-4">
        Flexbox works by defining a flex container and flex items. The container
        controls the layout, and its children (the flex items) align and distribute 
        within it. Below are the primary concepts and properties:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li><strong>Flex Container</strong>: The parent element with <code>display: flex;</code>.</li>
        <li><strong>Flex Items</strong>: The children of the flex container.</li>
        <li><strong>Main Axis</strong>: The primary axis along which items are laid out (can be horizontal or vertical).</li>
        <li><strong>Cross Axis</strong>: The perpendicular axis to the main axis.</li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Flex Container Properties</h2>
      <p className="text-lg mb-4">
        The container determines how the items inside are aligned and distributed. Here are some essential properties:
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. display</h3>
      <p className="text-lg mb-4">
        To activate Flexbox, set <code>display: flex;</code> on the container.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: flex;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. flex-direction</h3>
      <p className="text-lg mb-4">
        Specifies the direction of the main axis. Options include:
        <code>row</code> (default), <code>row-reverse</code>, <code>column</code>, and <code>column-reverse</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: flex;
  flex-direction: row;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">3. justify-content</h3>
      <p className="text-lg mb-4">
        Aligns items along the main axis. Values include:
        <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, and <code>space-around</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: flex;
  justify-content: space-between;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">4. align-items</h3>
      <p className="text-lg mb-4">
        Aligns items along the cross axis. Values include:
        <code>stretch</code> (default), <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, and <code>baseline</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: flex;
  align-items: center;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">5. flex-wrap</h3>
      <p className="text-lg mb-4">
        Determines whether items should wrap to the next line if there’s insufficient space. Values are <code>nowrap</code> (default), <code>wrap</code>, and <code>wrap-reverse</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: flex;
  flex-wrap: wrap;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Flex Item Properties</h2>
      <p className="text-lg mb-4">
        These properties control how individual items behave within the container.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. flex</h3>
      <p className="text-lg mb-4">
        A shorthand for setting <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  flex: 1;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. align-self</h3>
      <p className="text-lg mb-4">
        Overrides the <code>align-items</code> property for an individual item.
        Values include <code>auto</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>baseline</code>, and <code>stretch</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  align-self: flex-end;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Examples of Flexbox Layouts</h2>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. Horizontal Navigation</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`nav {
  display: flex;
  justify-content: space-around;
}

nav a {
  padding: 10px 15px;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. Card Grid</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 calc(33.333% - 20px);
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Where to Practice Flexbox</h2>
      <p className="text-lg mb-4">
        Want to master Flexbox? Check out these interactive websites for hands-on practice:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Flexbox Froggy
          </a> - Solve fun puzzles by writing Flexbox CSS.
        </li>
        <li>
          <a href="https://www.flexboxpatterns.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Flexbox Patterns
          </a> - Explore common Flexbox layout patterns.
        </li>
        <li>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            CSS-Tricks Flexbox Guide
          </a> - A comprehensive guide to Flexbox.
        </li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Why Flexbox Matters</h2>
      <p className="text-lg mb-4">
        Flexbox is essential for modern web development, allowing you to create
        adaptable, responsive layouts with minimal effort. By mastering it, you
        can create layouts that work seamlessly across all screen sizes.
      </p>
    </div>
  );
};

export default Flexbox;

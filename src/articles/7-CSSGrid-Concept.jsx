import React from "react";
import Divider from "../components/Divider";

const CSSGrid = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Grid</h1>
      <p className="text-lg mb-4">
        CSS Grid is a powerful two-dimensional layout system that allows you to
        design web pages with rows and columns. It offers precise control over
        layout structure, making it ideal for creating complex, responsive
        designs.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Grid Concepts
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Grid Container</strong>: The parent element with{" "}
          <code>display: grid</code>.
        </li>
        <li>
          <strong>Grid Items</strong>: The direct children of the grid
          container.
        </li>
        <li>
          <strong>Grid Lines</strong>: The dividing lines that form rows and
          columns.
        </li>
        <li>
          <strong>Grid Tracks</strong>: Rows or columns between grid lines.
        </li>
        <li>
          <strong>Grid Cell</strong>: The space between two adjacent row and
          column grid lines.
        </li>
        <li>
          <strong>Grid Areas</strong>: Named sections of the grid layout.
        </li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Basic Grid Syntax
      </h2>
      <p className="text-lg mb-4">
        To create a grid, set the container’s <code>display</code> to{" "}
        <code>grid</code>
        or <code>inline-grid</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: grid;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Defining Columns and Rows
      </h3>
      <p className="text-lg mb-4">
        Use <code>grid-template-columns</code> and{" "}
        <code>grid-template-rows</code>
        to define grid tracks.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 200px;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Placing Items
      </h3>
      <p className="text-lg mb-4">
        Use <code>grid-column</code> and <code>grid-row</code> to position
        items:
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`item {
  grid-column: 1 / 3; /* Spans from column 1 to 3 */
  grid-row: 2 / 4;   /* Spans from row 2 to 4 */
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Advanced Features in Grid
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. Grid Gap</h3>
      <p className="text-lg mb-4">Adds spacing between rows and columns:</p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: grid;
  gap: 10px; /* Or row-gap and column-gap */
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. Named Grid Areas
      </h3>
      <p className="text-lg mb-4">
        Define and place items with named grid areas:
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
}

header { grid-area: header; }
sidebar { grid-area: sidebar; }
content { grid-area: content; }`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Practice Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <a
            href="https://cssgridgarden.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            CSS Grid Garden
          </a>{" "}
          - Practice grid concepts interactively.
        </li>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/complete-guide-grid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            CSS-Tricks Grid Guide
          </a>{" "}
          - Comprehensive resource for CSS Grid.
        </li>
      </ul>
    </div>
  );
};

export default CSSGrid;

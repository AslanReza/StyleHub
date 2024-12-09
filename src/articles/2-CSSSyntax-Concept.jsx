import React from "react";
import Divider from "../components/Divider";

const CssSyntaxConcept = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Syntax
      </h1>
      <p className="text-lg mb-4">
        CSS syntax is the foundation for styling HTML elements. It determines
        how elements are styled by specifying rules through selectors and
        declarations.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Structure of a CSS Rule
      </h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`selector {
  property: value;
}`}</code>
      </pre>
      <p className="text-lg mb-4">For example:</p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1 {
  color: red;
  font-size: 2em;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Types of Selectors
      </h2>
      <p className="text-lg mb-4">
        Selectors in CSS are used to target HTML elements and apply styles. Here
        are some common types of selectors:
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        1. Universal Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The universal selector applies styles to all elements on the page,
        useful for resetting default styles.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. Type Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The type selector targets elements by their tag name, such as all{" "}
        <code>{`<p>`}</code> elements.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        3. Class Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.highlight {
  background-color: yellow;
  font-weight: bold;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The class selector targets elements by their class name and is reusable
        across multiple elements.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        4. ID Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`#main-title {
  font-size: 36px;
  color: darkblue;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The ID selector targets a single, unique element on the page by its ID.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        5. Grouping Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #444;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        Grouping selectors apply the same styles to multiple elements by
        separating them with commas.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        6. Descendant Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.container p {
  color: green;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The descendant selector targets elements nested within a specific parent
        element.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        7. Child Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.parent > p {
  color: red;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The child selector applies styles to direct children of a parent
        element, excluding nested descendants.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        8. Adjacent Sibling Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1 + p {
  font-style: italic;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The adjacent sibling selector targets the first element immediately
        following a specified element.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        9. General Sibling Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1 ~ p {
  color: blue;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The general sibling selector targets all sibling elements following the
        specified element.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        10. Attribute Selector
      </h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`input[type="text"] {
  border: 2px solid blue;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The attribute selector targets elements based on their attributes and
        values, such as inputs with specific types.
      </p>
      <p className="text-lg mb-4">
        CSS selectors are powerful tools for targeting and styling HTML
        elements. By understanding their types and usage, you can create
        flexible, scalable, and maintainable CSS for your projects.
      </p>
      <Divider />
      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Advanced Techniques
      </h2>
      <p className="text-lg mb-4">
        Advanced CSS techniques enable more precise and efficient styling by
        combining selectors, nesting rules, and applying complex conditions.
        These techniques are essential for creating structured, maintainable
        stylesheets.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        1. Grouping Selectors
      </h3>
      <p className="text-lg mb-4">
        Grouping selectors allows you to apply the same style to multiple
        elements by separating them with commas. This reduces redundancy and
        keeps your CSS cleaner.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  color: #444;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. Nesting Selectors
      </h3>
      <p className="text-lg mb-4">
        Nesting selectors helps target specific elements within a hierarchy.
        This is useful for styling elements based on their relationship to their
        parent or sibling elements.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`nav ul {
  list-style-type: none;
}

nav ul li {
  display: inline-block;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        3. Combining Selectors
      </h3>
      <p className="text-lg mb-4">
        Combine multiple selectors to target elements with greater specificity.
        Use combinations like descendant, child, and sibling selectors for
        precise targeting.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.container > .box + .info {
  margin-top: 20px;
  color: green;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This rule applies styles to an element with the class <code>.info</code>{" "}
        that directly follows an element with the class <code>.box</code>, both
        within a parent element with the class <code>.container</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        4. Attribute Selectors with Advanced Conditions
      </h3>
      <p className="text-lg mb-4">
        Attribute selectors can also include advanced conditions like "starts
        with", "ends with", or "contains" for flexible targeting.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`input[type^="text"] {
  border: 1px solid blue;
}

input[type$="password"] {
  border: 1px solid red;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The first rule targets input fields where the <code>type</code>{" "}
        attribute starts with "text", while the second targets input fields
        where the <code>type</code> ends with "password".
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        5. Pseudo-classes and Pseudo-elements
      </h3>
      <p className="text-lg mb-4">
        Use pseudo-classes and pseudo-elements for advanced styling of elements
        based on their state or position.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`a:hover {
  text-decoration: underline;
  color: darkblue;
}

p::first-line {
  font-weight: bold;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The <code>:hover</code> pseudo-class styles links when the user hovers
        over them. The <code>::first-line</code> pseudo-element applies styles
        only to the first line of a paragraph.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        6. Media Queries for Responsive Design
      </h3>
      <p className="text-lg mb-4">
        Media queries allow you to apply different styles based on the device's
        screen size or other characteristics.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This media query applies styles to elements with the class{" "}
        <code>.container</code> when the screen width is 768px or smaller,
        changing their layout to a columnar direction.
      </p>

      <p className="text-lg mb-4">
        By mastering these advanced CSS techniques, you can handle complex
        styling requirements with precision and efficiency, making your websites
        more dynamic and user-friendly.
      </p>
    </div>
  );
};

export default CssSyntaxConcept;

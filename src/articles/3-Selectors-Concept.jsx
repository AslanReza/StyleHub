import React from "react";
import Divider from "../components/Divider";

const Selectors = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Selectors</h1>
      <p className="text-lg mb-4">
        CSS selectors are the fundamental building blocks for applying styles to
        HTML elements. They allow developers to select HTML elements and apply
        specific styles to them based on different patterns and attributes.
        Understanding how to use selectors effectively is crucial for writing
        efficient and maintainable CSS.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        What Are CSS Selectors?
      </h2>
      <p className="text-lg mb-4">
        CSS selectors are patterns used to select HTML elements for styling.
        They define which elements in the document should be affected by the
        rules set within the CSS. A well-chosen selector can ensure that your
        styles are applied precisely where you want them and can significantly
        reduce the complexity of your stylesheets.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Types of CSS Selectors
      </h2>
      <p className="text-lg mb-4">
        CSS selectors can be classified into different categories, each serving
        a specific purpose. Understanding the different types of selectors helps
        ensure that your styles are targeted correctly and efficiently.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        1. Universal Selector
      </h3>
      <p className="text-lg mb-4">
        The universal selector (<code>*</code>) applies styles to every element
        on the page. It's commonly used for global styles or resetting
        properties like margin, padding, and box-sizing across all elements.
        However, overusing the universal selector can lead to performance
        issues, so it’s best used sparingly.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Applying a global reset to remove default
        spacing in browsers, making your styles more consistent.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. Type Selector
      </h3>
      <p className="text-lg mb-4">
        The type selector matches elements by their tag name (e.g.,{" "}
        <code>h1</code>, <code>p</code>, <code>div</code>). It’s useful for
        applying styles to all instances of a specific HTML element. It’s more
        specific than the universal selector and is widely used when styling
        elements like headings, paragraphs, or links.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`p {
  font-size: 16px;
  color: #333;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Styling all paragraphs (
        <code>&lt;p&gt;</code>) with a specific font size and color.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        3. Class Selector
      </h3>
      <p className="text-lg mb-4">
        The class selector targets elements with a specific class attribute. It
        is denoted by a period (<code>.</code>) followed by the class name.
        Class selectors are reusable and allow developers to apply the same
        styles to multiple elements without affecting others. It's one of the
        most commonly used selectors.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.highlight {
  background-color: yellow;
  font-weight: bold;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Highlighting text in a paragraph by applying
        a <code>.highlight</code> class to specific parts of the content.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        4. ID Selector
      </h3>
      <p className="text-lg mb-4">
        The ID selector targets a specific element with a unique ID. It’s
        denoted by a hash symbol (<code>#</code>) followed by the ID value.
        Since IDs are unique within a page, this selector is used to apply
        styles to a single element, such as a unique heading or a container.
        However, due to its high specificity, it’s recommended to use it
        carefully to avoid conflicts with other selectors.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`#main-title {
  font-size: 36px;
  color: darkblue;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Applying a style to a unique element like a
        main heading (<code>#main-title</code>) or a special container.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        5. Grouping Selector
      </h3>
      <p className="text-lg mb-4">
        The grouping selector combines multiple selectors into a single rule. It
        allows you to apply the same styles to various elements at once, which
        helps reduce redundancy in your stylesheet. Grouping selectors can
        include any type of selector (e.g., type, class, ID) separated by
        commas.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #444;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Apply the same styles to multiple headings (
        <code>h1</code>, <code>h2</code>, <code>h3</code>) for a consistent
        look.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Advanced Selectors
      </h2>
      <p className="text-lg mb-4">
        CSS also provides more advanced selectors to target elements based on
        their relationships in the HTML document or specific attributes. These
        selectors can be combined to create highly specific and efficient
        targeting strategies.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        1. Descendant Selector
      </h3>
      <p className="text-lg mb-4">
        The descendant selector targets elements that are nested within a
        specified ancestor. It selects elements that are descendants (children,
        grandchildren, etc.) of a given element.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.container p {
  color: green;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Apply a style to all <code>p</code> tags
        inside a container with the <code>.container</code> class.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. Child Selector
      </h3>
      <p className="text-lg mb-4">
        The child selector targets only direct children of a specified element.
        This is more specific than the descendant selector, as it does not
        select elements that are deeper in the hierarchy.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.parent > p {
  color: red;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Style only the direct <code>p</code> tags
        inside a <code>.parent</code> element.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        3. Attribute Selector
      </h3>
      <p className="text-lg mb-4">
        The attribute selector targets elements based on the presence or value
        of specific attributes. It allows developers to select elements
        dynamically without relying on specific class names or IDs.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`input[type="text"] {
  border: 2px solid blue;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        <strong>Use Case:</strong> Apply a border to all <code>input</code>{" "}
        fields that have a type of "text".
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Mastering CSS Selectors
      </h2>
      <p className="text-lg mb-4">
        Mastering CSS selectors is essential for creating powerful and efficient
        stylesheets. By using the right selector for the right job, you can make
        your stylesheets cleaner, faster, and more maintainable. Always aim for
        specificity, but avoid unnecessary complexity. Combining simple
        selectors with advanced ones helps keep your design flexible and
        scalable.
      </p>
    </div>
  );
};

export default Selectors;

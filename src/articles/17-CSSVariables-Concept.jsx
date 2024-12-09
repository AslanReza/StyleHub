import React from "react";
import Divider from "../components/Divider";

const CSSVariables = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Variables (Custom Properties)
      </h1>
      <p className="text-lg mb-4">
        CSS Variables, also known as Custom Properties, allow you to define
        reusable values in your stylesheets that can be referenced throughout
        the document. They provide flexibility and help reduce repetition in
        your CSS.
      </p>
      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Defining and Using CSS Variables
      </h2>
      <p className="text-lg mb-4">
        You can define CSS variables globally (under <code>:root</code>) or
        locally (within specific selectors). These variables can then be
        referenced with the <code>var()</code> function.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`:root {
  --primary-color: #f5961d;
  --secondary-color: #e87d0d;
  --font-size: 16px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        Here, the variables are available globally since they are defined under
        the <code>:root</code> selector. These variables can be reused
        throughout the stylesheet.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Using CSS Variables
      </h2>
      <p className="text-lg mb-4">
        Once variables are defined, you can use them within your CSS properties
        by referencing them with <code>var()</code>.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`body {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}

h1 {
  color: var(--secondary-color);
  font-size: calc(var(--font-size) * 2);
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the <code>body</code> and <code>h1</code> elements are
        using the defined CSS variables for colors and font sizes. The{" "}
        <code>font-size</code> for <code>h1</code> is also dynamically scaled
        using the <code>calc()</code> function.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        CSS Variables with Fallbacks
      </h2>
      <p className="text-lg mb-4">
        You can also provide fallback values when referencing a variable in case
        it's not defined or is invalid.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h2 {
  color: var(--non-existent-color, #333);  /* Fallback to #333 if --non-existent-color is not defined */
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, if the <code>--non-existent-color</code> variable is
        not defined, the fallback color <code>#333</code> will be used.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Dynamic Changes with JavaScript
      </h2>
      <p className="text-lg mb-4">
        CSS Variables can also be dynamically modified with JavaScript to create
        interactive and responsive designs.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`document.documentElement.style.setProperty('--primary-color', '#3498db');`}</code>
      </pre>
      <p className="text-lg mb-4">
        This JavaScript code updates the <code>--primary-color</code> variable
        to a new color, and any elements using that variable will automatically
        reflect the change.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Example: Theming with CSS Variables
      </h2>
      <p className="text-lg mb-4">
        CSS Variables are great for creating themes. Here’s an example of a
        light and dark theme toggle using CSS variables.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --button-color: #f5961d;
}

[data-theme="dark"] {
  --background-color: #333333;
  --text-color: #ffffff;
  --button-color: #3498db;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the light and dark theme variables are defined. The{" "}
        <code>[data-theme="dark"]</code> selector overrides the variables when
        the theme is set to dark.
      </p>

      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        This JavaScript function toggles between light and dark themes by
        changing the <code>data-theme</code> attribute, and the CSS variables
        update accordingly.
      </p>
    </div>
  );
};

export default CSSVariables;

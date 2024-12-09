import React from "react";
import Divider from "../components/Divider";

const CSSCustomProperties = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Custom Properties
      </h1>
      <p className="text-lg mb-4">
        CSS Custom Properties, commonly known as CSS Variables, allow you to
        define reusable values in your CSS that can be accessed throughout your
        stylesheet. They are called "custom" because they can be given any name
        you choose, but they follow a specific syntax.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Syntax for Custom Properties
      </h2>
      <p className="text-lg mb-4">
        The syntax for defining a custom property is simple. Custom properties
        are always prefixed with two hyphens (<code>--</code>), followed by the
        name you choose. Once defined, they can be accessed using the{" "}
        <code>var()</code> function.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`:root {
  --main-bg-color: #3498db;
  --font-size: 18px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, two custom properties are defined globally under the{" "}
        <code>:root</code> selector, meaning they will be accessible throughout
        the entire document.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Using Custom Properties
      </h2>
      <p className="text-lg mb-4">
        Once a custom property is defined, it can be used anywhere in your
        stylesheet using the <code>var()</code> function. This function fetches
        the value of the custom property.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`body {
  background-color: var(--main-bg-color);
  font-size: var(--font-size);
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In the code above, the <code>body</code> element will have a background
        color of <code>#3498db</code> and a font size of <code>18px</code>,
        which are the values defined in the custom properties.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Overriding Custom Properties
      </h2>
      <p className="text-lg mb-4">
        Custom properties are inherited by default, so they can be overridden in
        specific selectors or even inside a media query for responsiveness.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  --main-bg-color: #e74c3c;
  background-color: var(--main-bg-color);
  padding: 20px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        Here, the custom property <code>--main-bg-color</code> is overridden
        within the <code>div</code> selector to be <code>#e74c3c</code>, which
        will change the background color for that specific <code>div</code>{" "}
        only.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Custom Properties in Media Queries
      </h2>
      <p className="text-lg mb-4">
        CSS custom properties can also be used in media queries for creating
        responsive designs. You can define different property values for
        different screen sizes.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`:root {
  --main-bg-color: #3498db;
}

@media (max-width: 768px) {
  :root {
    --main-bg-color: #2ecc71;
  }
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the default background color is set to{" "}
        <code>#3498db</code>, but if the viewport width is less than 768px
        (tablet or mobile), it switches to <code>#2ecc71</code>, which is a
        green color.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Fallback Values for Custom Properties
      </h2>
      <p className="text-lg mb-4">
        You can also define a fallback value in case the custom property is not
        defined or is invalid.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`h2 {
  color: var(--non-existent-color, #333);
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In the example above, if the custom property{" "}
        <code>--non-existent-color</code> is not defined anywhere, the color
        will fall back to <code>#333</code> as a default.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        JavaScript and Custom Properties
      </h2>
      <p className="text-lg mb-4">
        CSS custom properties can be dynamically updated via JavaScript, which
        allows for real-time changes to styling, such as theming or animation.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`document.documentElement.style.setProperty('--main-bg-color', '#9b59b6');`}</code>
      </pre>
      <p className="text-lg mb-4">
        The above JavaScript code dynamically changes the value of the{" "}
        <code>--main-bg-color</code> property to <code>#9b59b6</code> (a purple
        color).
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Example: Dynamic Theming with Custom Properties
      </h2>
      <p className="text-lg mb-4">
        Here's an example of how you can create a dynamic theming system with
        CSS custom properties and JavaScript.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: black;
  --text-color: white;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        The custom properties for <code>--bg-color</code> and{" "}
        <code>--text-color</code> are initially set to light theme values. In
        the dark theme, the custom properties are overridden.
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
        The JavaScript function allows the user to toggle between light and dark
        themes by changing the <code>data-theme</code> attribute, dynamically
        updating the custom properties for background and text colors.
      </p>
    </div>
  );
};

export default CSSCustomProperties;

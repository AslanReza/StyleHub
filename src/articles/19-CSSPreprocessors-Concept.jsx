import React from "react";
import Divider from "../components/Divider";

const CSSPreprocessors = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Preprocessors
      </h1>
      <p className="text-lg mb-4">
        CSS preprocessors are scripting languages that extend the functionality
        of CSS. They provide features like variables, functions, conditionals,
        and loops that aren't natively available in plain CSS.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        What are CSS Preprocessors?
      </h2>
      <p className="text-lg mb-4">
        Preprocessors allow you to write more programmatic CSS code, which is
        then converted into regular CSS by a compiler. This process makes
        writing, maintaining, and scaling large stylesheets easier.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Features of CSS Preprocessors
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Variables</strong>: Store values like colors, font sizes, and
          more for easy reuse.
        </li>
        <li>
          <strong>Nesting</strong>: Nest your CSS selectors for a hierarchical
          structure.
        </li>
        <li>
          <strong>Mixins</strong>: Create reusable blocks of CSS to avoid
          duplication.
        </li>
        <li>
          <strong>Inheritance</strong>: Use the @extend rule to share styles
          across selectors.
        </li>
        <li>
          <strong>Mathematical Operations</strong>: Perform operations like
          addition, subtraction, etc., directly in CSS.
        </li>
        <li>
          <strong>Partials and Importing</strong>: Organize your CSS by breaking
          it into smaller files and importing them into one main file.
        </li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Popular CSS Preprocessors
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Sass and SCSS
      </h3>
      <p className="text-lg mb-4">
        Sass (Syntactically Awesome Stylesheets) is a widely used CSS
        preprocessor. It provides both a more compact syntax (Sass) and a more
        familiar one (SCSS), which is closely aligned with standard CSS.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`$primary-color: #3498db;

.button {
  background-color: $primary-color;
  padding: 10px 20px;
}`}</code>
      </pre>

      <Divider />

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">LESS</h3>
      <p className="text-lg mb-4">
        LESS is another preprocessor that offers similar features to Sass, such
        as variables, nesting, and mixins. LESS has a syntax that's also quite
        similar to regular CSS.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`@primary-color: #3498db;

.button {
  background-color: @primary-color;
  padding: 10px 20px;
}`}</code>
      </pre>

      <Divider />

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Stylus</h3>
      <p className="text-lg mb-4">
        Stylus is a more flexible CSS preprocessor, offering a more permissive
        syntax than Sass or LESS. You can omit semicolons, braces, and even
        parentheses in functions.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`primary-color = #3498db

.button
  background-color: primary-color
  padding: 10px 20px`}</code>
      </pre>

      <Divider />

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">PostCSS</h3>
      <p className="text-lg mb-4">
        PostCSS isn't strictly a preprocessor but a tool that uses plugins to
        transform CSS. Some common PostCSS plugins are Autoprefixer (for vendor
        prefixes), CSSNano (for minification), and CSSNext (to use future CSS
        syntax).
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`/* PostCSS plugin to add vendor prefixes */
* {
  display: flex;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Why Use CSS Preprocessors?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Modularization</strong>: Break your styles into smaller,
          manageable parts.
        </li>
        <li>
          <strong>Reusability</strong>: Use variables, mixins, and inheritance
          to reduce duplication.
        </li>
        <li>
          <strong>Enhanced Functionality</strong>: Perform tasks like
          mathematical operations directly in CSS.
        </li>
        <li>
          <strong>Improved Readability</strong>: Nesting and structure make it
          easier to read your code.
        </li>
        <li>
          <strong>Faster Development</strong>: With reusable code and
          modularity, you can develop faster and more efficiently.
        </li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When Not to Use Preprocessors
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Small Projects</strong>: For simple websites, using a
          preprocessor might add unnecessary complexity.
        </li>
        <li>
          <strong>Learning Curve</strong>: There's a slight learning curve to
          adopting preprocessors if you're new to CSS or development.
        </li>
        <li>
          <strong>Performance Overhead</strong>: Preprocessors require a build
          step, which may not be necessary for small projects.
        </li>
      </ul>

      <Divider />
      
      <p className="text-lg mb-4">
        CSS preprocessors like <strong>Sass</strong>, <strong>LESS</strong>, and{" "}
        <strong>Stylus</strong> are powerful tools that allow for greater
        flexibility, modularity, and maintainability in CSS. They are especially
        useful for larger projects where you need more control and reusable
        code. However, for small, simple projects, using a preprocessor may
        introduce unnecessary complexity.
      </p>
    </div>
  );
};

export default CSSPreprocessors;

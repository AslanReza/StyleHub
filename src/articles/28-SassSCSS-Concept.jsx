import React from "react";
import Divider from "../components/Divider";

const SassSCSSConcept = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        Sass and SCSS Concepts
      </h1>
      <p className="text-lg mb-4">
        Sass and SCSS are CSS preprocessors that allow for variables, nested
        rules, mixins, and more, making CSS more powerful and easier to
        maintain.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`$primary-color: #3498db;

.container {
  background-color: $primary-color;
  color: white;
  
  .header {
    font-size: 2em;
  }
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use Sass or SCSS when you need to organize your stylesheets better, use
        reusable code, and manage large projects more efficiently.
      </p>
    </div>
  );
};

export default SassSCSSConcept;

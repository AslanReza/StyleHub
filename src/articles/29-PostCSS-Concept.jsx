import React from "react";
import Divider from "../components/Divider";

const PostCSSConcept = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">PostCSS</h1>
      <p className="text-lg mb-4">
        PostCSS is a tool for transforming CSS with JavaScript plugins. It
        allows for features like autoprefixing, minification, and custom syntax.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`/* PostCSS plugin to add vendor prefixes */
* {
  display: flex;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use PostCSS to automate tasks like autoprefixing or minifying your CSS,
        allowing you to improve performance and compatibility.
      </p>
    </div>
  );
};

export default PostCSSConcept;

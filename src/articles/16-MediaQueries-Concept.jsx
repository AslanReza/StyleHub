import React from "react";
import Divider from "../components/Divider";

const MediaQuery = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Media Queries
      </h1>
      <p className="text-lg mb-4">
        Media queries enable responsive designs by applying styles based on
        device width, height, orientation, or resolution.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Common Breakpoints
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Small devices:</strong> max-width: 600px
        </li>
        <li>
          <strong>Medium devices:</strong> max-width: 768px
        </li>
        <li>
          <strong>Large devices:</strong> min-width: 1024px
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        Here, the background color changes on devices smaller than 600px.
      </p>
    </div>
  );
};

export default MediaQuery;

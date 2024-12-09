import React from "react";
import Divider from "../components/Divider";

const CSSBackgrounds = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Backgrounds
      </h1>
      <p className="text-lg mb-4">
        The <code>background</code> property is used to set various background
        properties for an element, including color, images, and gradients.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.box {
  background: linear-gradient(to right, red, yellow);
  height: 100vh;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use background properties to enhance the visual appearance of elements
        and to create complex designs like gradients or images.
      </p>
    </div>
  );
};

export default CSSBackgrounds;

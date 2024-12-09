import React from "react";
import Divider from "../components/Divider";

const FlexboxAdvanced = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        Advanced Flexbox in CSS
      </h1>
      <p className="text-lg mb-4">
        Flexbox is a powerful layout system that makes it easier to align and
        distribute space among items in a container. It offers flexible and
        dynamic layouts.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`/* Flex container */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 30%;  /* Flex-grow, flex-shrink, flex-basis */
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use Flexbox for creating dynamic, responsive layouts. It's especially
        useful when elements need to adjust their position based on screen size
        or content.
      </p>
    </div>
  );
};

export default FlexboxAdvanced;

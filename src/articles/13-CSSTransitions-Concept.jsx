import React from "react";
import Divider from "../components/Divider";

const Transitions = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Transitions
      </h1>
      <p className="text-lg mb-4">
        CSS transitions enable smooth changes between property values over time.
        They add polish and interactivity to web elements.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Properties
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>transition-property</strong>: Specifies the CSS property to
          transition.
        </li>
        <li>
          <strong>transition-duration</strong>: Sets the time the transition
          takes.
        </li>
        <li>
          <strong>transition-timing-function</strong>: Defines the speed curve
          (ease, linear, ease-in-out).
        </li>
        <li>
          <strong>transition-delay</strong>: Adds a delay before the transition
          starts.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`button {
  background-color: #f5961d;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #e87d0d;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, hovering over the button smoothly changes its
        background color over 0.3 seconds.
      </p>
    </div>
  );
};

export default Transitions;

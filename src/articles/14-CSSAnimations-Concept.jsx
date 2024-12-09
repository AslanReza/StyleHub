import React from "react";
import Divider from "../components/Divider";

const Animations = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Animations</h1>
      <p className="text-lg mb-4">
        CSS animations allow elements to transition between multiple states with
        keyframes.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Properties
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>animation-name</strong>: Specifies the name of the keyframes.
        </li>
        <li>
          <strong>animation-duration</strong>: Sets the length of the animation.
        </li>
        <li>
          <strong>animation-timing-function</strong>: Defines the animation
          speed curve.
        </li>
        <li>
          <strong>animation-delay</strong>: Delays the start of the animation.
        </li>
        <li>
          <strong>animation-iteration-count</strong>: Specifies how many times
          to run the animation.
        </li>
        <li>
          <strong>animation-direction</strong>: Sets whether the animation runs
          forwards, backwards, or alternates.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">Example</h3>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

div {
  animation: bounce 1s infinite;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the <code>div</code> element bounces up and down
        continuously.
      </p>
    </div>
  );
};

export default Animations;

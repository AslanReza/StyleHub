import React from "react";
import Divider from "../components/Divider";

const CSSinJSConcept = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS-in-JS</h1>
      <p className="text-lg mb-4">
        CSS-in-JS is a pattern where CSS is written inside JavaScript files. It
        allows for dynamic styling and is often used in modern React apps.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`const styles = {
  container: {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
  }
};

function MyComponent() {
  return <div style={styles.container}>Hello, CSS-in-JS!</div>;
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use CSS-in-JS for components that require dynamic styles, themes, or
        conditional styles based on props or state.
      </p>
    </div>
  );
};

export default CSSinJSConcept;

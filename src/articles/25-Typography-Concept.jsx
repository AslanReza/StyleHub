import React from "react";
import Divider from "../components/Divider";

const CssTypographyConcept = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh] bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Typography</h1>
      <p className="text-lg mb-4">
        Typography in CSS is essential for defining the visual style and
        readability of text. It includes properties for fonts, alignment,
        spacing, and decoration.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Key Typography Properties
      </h2>
      <ul className="list-disc ml-6 text-lg mb-4">
        <li>
          <strong>Font-family:</strong> Specifies the font of the text.
        </li>
        <li>
          <strong>Font-size:</strong> Sets the size of the font.
        </li>
        <li>
          <strong>Font-weight:</strong> Determines the thickness of the font.
        </li>
        <li>
          <strong>Line-height:</strong> Adjusts the space between lines of text.
        </li>
        <li>
          <strong>Text-align:</strong> Aligns text horizontally.
        </li>
      </ul>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Example of Typography Styling
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md mb-4">
        <code>{`p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;
}`}</code>
      </pre>

      <p className="text-lg mb-4">
        In the example above, the paragraph uses the Roboto font, has a size of
        16px, normal weight, and is justified for better readability.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Advanced Typography Techniques
      </h2>
      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Responsive Typography
      </h3>
      <p className="text-lg mb-4">
        Use <code>clamp()</code> for responsive font sizes that adjust
        dynamically based on screen size.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md mb-4">
        <code>{`h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Custom Web Fonts
      </h3>
      <p className="text-lg mb-4">
        Import custom fonts from Google Fonts or other services to enhance
        typography.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md mb-4">
        <code>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}`}</code>
      </pre>

      <Divider />

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        Best Practices
      </h3>
      <ul className="list-disc ml-6 text-lg mb-4">
        <li>Use readable font sizes, ideally above 16px for body text.</li>
        <li>Maintain consistent line height for better readability.</li>
        <li>Choose font families that complement your design and content.</li>
        <li>Ensure sufficient color contrast for accessibility.</li>
      </ul>

      <Divider />
      <p className="text-lg mb-4">
        Mastering CSS typography is vital for creating visually appealing and
        readable websites. Experiment with different properties and techniques
        to find what works best for your project.
      </p>
    </div>
  );
};

export default CssTypographyConcept;

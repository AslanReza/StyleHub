import React from "react";
import Divider from "../components/Divider";

const BoxModel = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">CSS Box Model</h1>
      <p className="text-lg mb-4">
        The CSS Box Model is a fundamental concept in web design and layout. It
        defines the rectangular boxes generated for elements in the document
        tree. The Box Model controls the size, spacing, and layout of elements,
        and understanding it is key to mastering CSS layout techniques.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        What is the CSS Box Model?
      </h2>
      <p className="text-lg mb-4">
        The CSS Box Model describes the rectangular boxes that are generated for
        HTML elements. Each element on a webpage is represented as a box, and
        these boxes consist of several layers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
        <li>
          <strong>Content</strong> – The actual content of the element, such as
          text, images, or other media.
        </li>
        <li>
          <strong>Padding</strong> – The space between the content and the
          border. Padding creates breathing room inside the box.
        </li>
        <li>
          <strong>Border</strong> – Surrounds the padding (if any) and content.
          The border can have different styles, widths, and colors.
        </li>
        <li>
          <strong>Margin</strong> – The outermost space around the element,
          creating distance between the element and others. The margin creates
          space between elements.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Box Model Diagram
      </h2>
      <p className="text-lg mb-4">
        Here is a simplified diagram of how the Box Model works:
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>
          {`|-------------------------------|
           |          Margin              |
           |   ------------------------   |
           |   |       Border          |   |
           |   |  ------------------  |   |
           |   |  |     Padding     |  |   |
           |   |  |  ------------  |  |   |
           |   |  |  | Content |  |  |   |
           |   |  |  ------------  |  |   |
           |   |  ------------------  |   |
           |   ------------------------   |
           |-------------------------------|`}
        </code>
      </pre>
      <p className="text-lg mb-4">
        This diagram helps visualize the structure of an element in the Box
        Model, showing how each part works together to define the total size of
        an element.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        How Does the Box Model Affect Layout?
      </h2>
      <p className="text-lg mb-4">
        The total size of an element is calculated by adding the width and
        height of the content, plus the padding, border, and margin. The way
        these values are handled can impact the overall layout and appearance of
        your page. Let’s break down each component of the Box Model and how they
        affect layout.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">1. Content</h3>
      <p className="text-lg mb-4">
        The content area holds the actual content of the element, such as text,
        images, or videos. The content size is defined by the width and height
        properties in CSS.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this case, the content inside the <code>div</code> has a width of
        300px and a height of 200px. However, the total size of the element will
        increase when padding, border, and margin are added.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">2. Padding</h3>
      <p className="text-lg mb-4">
        Padding is the space between the content and the border. It affects the
        total size of the element. You can specify padding for all four sides of
        an element (top, right, bottom, and left).
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
  padding: 20px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, the padding adds 20px of space on all four sides inside
        the <code>div</code>, making the total width and height larger than the
        content area itself.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">3. Border</h3>
      <p className="text-lg mb-4">
        The border surrounds the padding and content. Like padding, the border
        increases the total size of the element. Borders can be customized with
        different styles, widths, and colors.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this example, a 5px solid black border is added around the{" "}
        <code>div</code>, increasing the element's total width and height by
        10px (5px on each side).
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">4. Margin</h3>
      <p className="text-lg mb-4">
        Margin creates space outside the element. Unlike padding, which adds
        space inside the element, the margin controls the spacing between the
        element and others. It can be set on all sides as well.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this case, a 30px margin is added on all four sides, which increases
        the space between the <code>div</code> and other elements on the page,
        but does not affect the element’s size itself.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Box Sizing</h2>
      <p className="text-lg mb-4">
        By default, the total width and height of an element include the content
        area, padding, and border. However, you can change this behavior using
        the <code>box-sizing</code> property. The two primary values for{" "}
        <code>box-sizing</code> are:
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        1. content-box
      </h3>
      <p className="text-lg mb-4">
        This is the default value. The width and height only apply to the
        content area, and padding and border are added to the total size of the
        element.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: content-box;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        Here, the total width of the <code>div</code> will be 300px (content
        width) + 40px (20px padding on each side) + 10px (border on each side),
        totaling 350px.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#f5961d]">
        2. border-box
      </h3>
      <p className="text-lg mb-4">
        With <code>box-sizing: border-box</code>, the width and height include
        the content, padding, and border. This makes it easier to control the
        total size of elements without having to account for padding and borders
        separately.
      </p>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}`}</code>
      </pre>
      <p className="text-lg mb-4">
        In this case, the total width and height of the <code>div</code> will
        remain 300px by 200px, with padding and border included in the
        dimensions.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Why the Box Model is Important
      </h2>
      <p className="text-lg mb-4">
        Understanding the Box Model is critical for creating precise layouts,
        ensuring that elements appear as expected without overlapping or
        overflowing. By mastering the Box Model and box-sizing, you can design
        more responsive, predictable layouts that behave consistently across
        different screen sizes and devices.
      </p>
    </div>
  );
};

export default BoxModel;

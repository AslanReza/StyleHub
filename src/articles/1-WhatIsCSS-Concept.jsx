import React from "react";
import Divider from "../components/Divider";
const WhatIsCSS = () => {
  return (
    <div className=" p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">What is CSS?</h1>
      <p className="text-lg mb-4">
        <strong className=" text-[#f5961d]">CSS</strong> stands for{" "}
        <strong className=" text-[#f5961d]">Cascading Style Sheets</strong>. It
        is a stylesheet language that is used to describe the presentation
        (i.e., the layout and design) of a web page that is written in HTML or
        XML. While HTML is used to structure content, CSS is used to style that
        content, making it visually appealing and responsive to different screen
        sizes.
      </p>
      <p className="text-lg mb-4 text-blue-900s">
        CSS is essential for controlling the layout, colors, fonts, and other
        visual elements of a website. It separates the content (HTML) from the
        visual design (CSS), allowing developers to create cleaner, more
        maintainable code and making it easier to update a website’s design
        without affecting the content.
      </p>
      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Why is CSS Important?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>
          CSS provides control over the layout and design of your website.
        </li>
        <li>
          It enables responsive design, adapting your site to work on different
          devices (mobile, tablet, desktop).
        </li>
        <li>
          CSS allows you to create visually appealing user interfaces with
          custom fonts, colors, and spacing.
        </li>
        <li>
          It makes websites faster to load by separating content from
          presentation.
        </li>
        <li>
          CSS promotes easier maintenance and scalability of websites by keeping
          design separate from HTML content.
        </li>
      </ul>
      <Divider />
      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        How Does CSS Work?
      </h2>
      <p className="text-lg mb-4">
        CSS works by applying rules (selectors) to HTML elements. These rules
        consist of declarations, which define the style for specific properties
        of the selected elements. For example, you can define that all
        <code>&lt;h1&gt;</code> elements should have a red color, and a font
        size of 2em.
      </p>
      <h3 className="text-xl font-semibold mb-2 ">
        Basic Structure of a CSS Rule:
      </h3>
      <pre className=" text-white p-4 rounded-md mb-4">
        <code>
          {`selector {
  property: value;
}`}
        </code>
      </pre>
      <p className="text-lg mb-4">
        For example, a CSS rule for an <code>&lt;h1&gt;</code> heading could
        look like this:
      </p>
      <pre className=" text-white p-4 rounded-md  mb-4">
        <code>
          {`h1 {
  color: red;
  font-size: 2em;
}`}
        </code>
      </pre>
      <Divider />
      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        Types of CSS
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>
          <strong className="text-[#f5961d]">Inline CSS:</strong> Styles are
          applied directly to an HTML element using the <code>style</code>{" "}
          attribute. This method is typically used for quick, one-off styles.
          <pre className=" text-white p-4 rounded-md mb-4">
            <code>{`<h1 style="color: blue;">
  Hello World
</h1>`}</code>
          </pre>
        </li>
        <li>
          <strong className="text-[#f5961d]">Internal CSS:</strong> Styles are
          placed within a <code>&lt;style&gt;</code> tag in the{" "}
          <code>&lt;head&gt;</code> section of the HTML document.
          <pre className=" text-white p-4 rounded-md mb-4">
            <code>{`<style>
  h1 {
    color: green;
  }
</style>`}</code>
          </pre>
        </li>
        <li>
          <strong className="text-[#f5961d]">External CSS:</strong> Styles are
          stored in a separate .css file and linked to the HTML document. This
          is the most common method for large websites as it allows for easy
          maintenance and better performance.
          <pre className=" text-white p-4 rounded-md mb-4">
            <code>{`<link rel="stylesheet" 
href="styles.css">`}</code>
          </pre>
        </li>
      </ul>
      <Divider />
      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        CSS in Action
      </h2>
      <p className="text-lg mb-4">
        CSS plays a vital role in web development by allowing developers to
        create visually attractive, user-friendly websites. It separates content
        from design, enhances maintainability, and ensures that your website is
        responsive across different devices. By mastering CSS, you can unlock
        the potential to create stunning, interactive web experiences.
      </p>
    </div>
  );
};

export default WhatIsCSS;

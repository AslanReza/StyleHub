import React from "react";
import Divider from "../components/Divider";

const VendorPrefixes = () => {
  return (
    <div className="p-4 w-auto rounded-lg shadow-lg overflow-y-scroll scroll-smooth h-[100vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#f5961d]">
        CSS Vendor Prefixes
      </h1>
      <p className="text-lg mb-4">
        Vendor prefixes are used to ensure compatibility with different
        browsers, especially for experimental CSS properties.
      </p>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">Example</h2>
      <pre className="text-white p-4 rounded-md mb-4">
        <code>{`.box {
  -webkit-transition: all 0.5s ease;  /* Safari/Chrome */
  -moz-transition: all 0.5s ease;     /* Firefox */
  -ms-transition: all 0.5s ease;      /* Internet Explorer */
  transition: all 0.5s ease;          /* Standard syntax */
}`}</code>
      </pre>

      <Divider />

      <h2 className="text-2xl font-semibold mb-3 text-[#f5961d]">
        When to Use
      </h2>
      <p className="text-lg mb-4">
        Use vendor prefixes when dealing with properties that are not fully
        supported across all browsers.
      </p>
    </div>
  );
};

export default VendorPrefixes;

import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {!isOpen && (
        <button
          className="lg:hidden w-full hover:bg-neutral-800 hover:text-[#f5961d] gap-5 h-[100vh] text-lg  flex-col justify-center flex sticky items-center dark:bg-[#f5961d] dark:text-neutral-800"
          onClick={toggleSidebar}
        >
          <span className="px-[1px] text-3xl rotate-[90deg]">
            <TiThMenu />
          </span>
        </button>
      )}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-64 h-screen p-6 flex flex-col relative justify-start overflow-y-auto dark:bg-[#f5961d] dark:text-neutral-100`}
      >
        <button
          className="absolute right-4 top-[20px] flex justify-end text-neutral-700"
          onClick={toggleSidebar}
        >
          <span className="text-4xl">
            <IoClose />
          </span>
        </button>
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <span className="bg-neutral-700 text-lg px-2 py-1 rounded-md">
              Style
            </span>
            <span className="px-1 text-xl rounded-s-md font-bold">Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              className="text-2xl cursor-pointer text-neutral-700 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AslanReza?tab=following"
            >
              <FaGithub />
            </a>
            <span className="text-neutral-700 m-0 font-semibold text-xs p-0">
              Maybe a &#9734; on GitHub?
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="tracking-widest font-semibold uppercase dark:text-neutral-700">
              What is CSS ?
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Why is CSS Important ?
              </a>
              <a rel="noopener noreferrer" href="#">
                How Does CSS Work ?
              </a>
              <a rel="noopener noreferrer" href="#">
                Types of CSS
              </a>
              <a rel="noopener noreferrer" href="#">
                CSS in Action
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Syntax
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Structure of a CSS Rule
              </a>
              <a rel="noopener noreferrer" href="#">
                Types of Selectors
              </a>
              <a rel="noopener noreferrer" href="#">
                Selectors Advanced Techniques
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Selectors
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                What Are CSS Selectors ?
              </a>
              <a rel="noopener noreferrer" href="#">
                Types of CSS Selectors
              </a>
              <a rel="noopener noreferrer" href="#">
                Advanced Selectors
              </a>
              <a rel="noopener noreferrer" href="#">
                Mastering CSS Selectors
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Box Model
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                What is the CSS Box Model ?
              </a>
              <a rel="noopener noreferrer" href="#">
                Box Model Diagram
              </a>
              <a rel="noopener noreferrer" href="#">
                How Does the Box Model <br /> Affect Layout ?
              </a>
              <a rel="noopener noreferrer" href="#">
                Box Sizing
              </a>
              <a rel="noopener noreferrer" href="#">
                Why the Box Model is Important ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Positioning
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Position Property
              </a>
              <a rel="noopener noreferrer" href="#">
                Types of Positioning
              </a>
              <a rel="noopener noreferrer" href="#">
                Understanding Z-Index
              </a>
              <a rel="noopener noreferrer" href="#">
                Box Sizing
              </a>
              <a rel="noopener noreferrer" href="#">
                Why Positioning is Important ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Flexbox
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Key Flexbox Concepts
              </a>
              <a rel="noopener noreferrer" href="#">
                Flex Container Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Flex Item Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Examples of Flexbox Layouts
              </a>
              <a rel="noopener noreferrer" href="#">
                Where to Practice Flexbox ?
              </a>{" "}
              <a rel="noopener noreferrer" href="#">
                Why Flexbox Matters ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Grid
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Key Grid Concepts
              </a>
              <a rel="noopener noreferrer" href="#">
                Basic Grid Syntax
              </a>
              <a rel="noopener noreferrer" href="#">
                Defining Columns and Rows
              </a>
              <a rel="noopener noreferrer" href="#">
                Placing Items
              </a>
              <a rel="noopener noreferrer" href="#">
                Advanced Features in Grid
              </a>{" "}
              <a rel="noopener noreferrer" href="#">
                Practice Resources
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Display
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Common Display Values
              </a>
              <a rel="noopener noreferrer" href="#">
                Examples of Display modes
              </a>
              <a rel="noopener noreferrer" href="#">
                Why Understanding Display is Important ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Z-Index
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                How Z-Index Works ?
              </a>
              <a rel="noopener noreferrer" href="#">
                When to Use Z-Index ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Overflow
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Common Overflow Values
              </a>
              <a rel="noopener noreferrer" href="#">
                Practical Uses
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Visibility
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Visibility Values
              </a>
              <a rel="noopener noreferrer" href="#">
                Difference Between Visibility and Display
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Text Align
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Common Values
              </a>
              <a rel="noopener noreferrer" href="#">
                When to Use Text Align ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Transitions
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Key Transition Properties
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Animations
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Key Animation Properties
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Transform
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Transform Functions
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Media Queries
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Common Breakpoints
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Variables
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Defining and Using CSS Variables
              </a>
              <a rel="noopener noreferrer" href="#">
                Using CSS Variables
              </a>
              <a rel="noopener noreferrer" href="#">
                CSS Variables with Fallbacks
              </a>
              <a rel="noopener noreferrer" href="#">
                Dynamic Changes with JavaScript
              </a>
              <a rel="noopener noreferrer" href="#">
                Theming with CSS Variables
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Custom Properties
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Syntax for Custom Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Using Custom Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Overriding Custom Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Custom Properties in Media Queries
              </a>
              <a rel="noopener noreferrer" href="#">
                Fallback Values for Custom Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                JavaScript and Custom Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Dynamic Theming with Custom Properties
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Preprocessors
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                What are CSS Preprocessors ?
              </a>
              <a rel="noopener noreferrer" href="#">
                Key Features of CSS Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Popular CSS Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Why Use CSS Preprocessors ?
              </a>
              <a rel="noopener noreferrer" href="#">
                When Not to Use Preprocessors ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Vendor Prefixes
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Vendor Prefixes ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Functions
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use CSS Functions ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Backgrounds
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use CSS Backgrounds ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Shadows
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Shadows ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Borders and Radius
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Borders and Radius ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Typography
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Key Typography Properties
              </a>
              <a rel="noopener noreferrer" href="#">
                Example of Typography Styling
              </a>
              <a rel="noopener noreferrer" href="#">
                Advanced Typography Techniques
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Advanced Flexbox
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Flexbox ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS Advanced Grid
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Grid ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              Sass and SCSS
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Sass and SCSS ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              Post CSS
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use Post CSS ?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-neutral-700">
              CSS in JS
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                When to Use CSS in JS ?
              </a>
            </div>
          </div>
        </nav>
      </aside>
      <style jsx>{`
        aside::-webkit-scrollbar {
          width: 8px;
          /* border: 1px solid #3f3f46; */
        }
        aside::-webkit-scrollbar-thumb {
          background-color: #404040;
          border-radius: 16px;
        }
        aside::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

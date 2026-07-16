import React from "react";

// Reusable terminal / code-editor window chrome used across sections.
export const Terminal = ({ title, children, className = "", lang }) => (
  <div className={`term ${className}`}>
    <div className="term-bar">
      <span className="term-dots">
        <i className="term-dot r" />
        <i className="term-dot y" />
        <i className="term-dot g" />
      </span>
      <span className="term-title">{title}</span>
      {lang && <span className="term-lang">{lang}</span>}
    </div>
    <div className="term-body">{children}</div>
  </div>
);

export const SectionHeading = ({ index, title }) => (
  <header className="sec-head">
    <span className="sec-index">{index}</span>
    <h2 className="sec-title">{title}</h2>
    <span className="sec-rule" />
  </header>
);

export default Terminal;

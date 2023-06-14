import React from "react";

const Icon = ({ name, className }) => {
  const iconPath = getIconPath(name);

  if (!iconPath) {
    console.warn(`Icon '${name}' not found.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`icon ${className}`}
    >
      {iconPath}
    </svg>
  );
};

const getIconPath = (name) => {
  switch (name) {
    case "chevron-left":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      );
    case "chevron-right":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      );
    default:
      return null;
  }
};

export default Icon;

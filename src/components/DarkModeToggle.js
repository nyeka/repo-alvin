import * as React from "react";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [stylePath, setStylePath] = useState("dark.css");

  const handleButtonClick = () => {
    const newStylePath = stylePath === "dark.css" ? "light.css" : "dark.css";
    setStylePath(newStylePath);
  };

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `assets/styles/${stylePath}`;

    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [stylePath]);

  return <li className="mode" onClick={handleButtonClick}></li>;
}

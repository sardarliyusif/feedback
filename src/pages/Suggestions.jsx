import React from "react";
import { LeftFilter } from "../components/LeftFilter";
import { RightCards } from "../components/RightCards";

export const Suggestions = () => {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "255px 1fr",
        gap: "24px",
      }}
    >
      <LeftFilter/>
      <RightCards/>
    </div>
  );
};

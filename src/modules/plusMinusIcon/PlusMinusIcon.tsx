import React from "react";
import "./plusMinusIcon.scss";

type Props = {
  isOpen: boolean;
};

const PlusMinusIcon = ({ isOpen }: Props) => {
  return (
    <div className={`plus-minus-icon ${isOpen ? "open" : ""}`}>
      <div className="vertical-line"></div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default PlusMinusIcon;

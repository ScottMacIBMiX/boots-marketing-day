"use client";

import { useState } from "react";
import "./messagesAccordion.scss";
import localFont from "next/font/local";
import FormComponent from "../FormComponent/FormComponent";
import AccordionArrow from "../../modules/AccordionArrow";
const IBMPlexSans = localFont({ src: "../../fonts/IBMPlexSans-Regular.ttf" });

const MessagesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`messages-accordion ${IBMPlexSans.className}`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="accordion-flush-heading-1">
          <button
            type="button"
            aria-expanded={true}
            aria-controls="accordion-flush-body-1"
            onClick={() => handleAccordionClick(0)}
          >
            <span>Submit Vote</span>
            <AccordionArrow isActive={activeIndex === 0} />
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className={`accordion-content ${activeIndex === 0 ? "active" : ""}`}
          aria-labelledby="accordion-flush-heading-1"
        >
          <FormComponent formType="question" />
        </div>
      </div>
    </div>
  );
};

export default MessagesAccordion;

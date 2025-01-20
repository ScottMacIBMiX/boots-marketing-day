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
        <FormComponent formType="question" />
      </div>
    </div>
  );
};

export default MessagesAccordion;

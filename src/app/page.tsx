"use client";

import Image from "next/image";
import { IBMPlexSans } from "../fonts/fonts";
import "./welcome-page.scss";
import ibmLogo from "../assets/white-ibm-logo.png";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = "/info/agenda";
  };

  const handleExternalClick = (e: any) => {
    e.preventDefault();
    window.location.href = "https://ibm.box.com/s/5cx5eurwrfixnhf113dmbrg1i5bsh3jz";
  };

  return (
    <div>
      (
      <div className={`diageo-soi-welcome-page ${IBMPlexSans.className}`}>
        <div className="flex min-h-screen flex-col px-8 py-8 diageo-soi-welcome-page__container">
          <div className="diageo-soi-welcome-page__pre-text">
            <p>Welcome to</p>
          </div>
          <div className="diageo-soi-welcome-page__image">
            <Image src={ibmLogo} width={200} height={130} alt="IBM Logo" />
          </div>
          <div className="diageo-soi-welcome-page__button-container">
            <button
              type="submit"
              onClick={handleSubmit}
              className="diageo-soi-welcome-page__button"
            >
25th January 2025
            </button>
          </div>
          <button className="diageo-soi-welcome-page__button" onClick={handleExternalClick}>
            Event Resources
          </button>
        </div>
      </div>
      )
    </div>
  );
}

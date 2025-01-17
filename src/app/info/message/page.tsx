"use client";

import Header from "../../../Components/Header/Header";
import Tabs from "../../../Components/Tabs/Tabs";
import MessagesAccordion from "../../../Components/MessagesAccordion/MessagesAccordion";
import "./message-page.scss";

export default function Home() {

  return (
    <main className="message-main">
      <Header />
      <div className="tabs-container">
        <Tabs />
      </div>
      <div className="scrollable-container">
        <MessagesAccordion />
      </div>
    </main>
  );
}

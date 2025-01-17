"use client";

import Header from "../../../Components/Header/Header";
import Tabs from "../../../Components/Tabs/Tabs";
import Speakers from "../../../data/speakers.json";
import SpeakerList from "../../../Components/SpeakerList/SpeakerList";
import "./speaker-page.scss";

export default function Home() {
  return (
    <main className="speakers-main">
      <Header />
      <div className="tabs-container">
        <Tabs />
      </div>
      <div className="scrollable-container">
        <div className="gradient-overlay"></div>
        <SpeakerList speakers={Speakers} />
      </div>
    </main>
  );
}

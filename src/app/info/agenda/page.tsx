"use client";

import AgendaList from "../../../Components/AgendaList/AgendaList";
import { IBMPlexSans } from "../../../fonts/fonts";
import Header from "../../../Components/Header/Header";
import Tabs from "../../../Components/Tabs/Tabs";
import agenda from "../../../data/agenda.json";
import "./agenda-page.scss";

export default function Home() {
  return (
    <main className={`agenda-main ${IBMPlexSans.className}`}>
      <Header />
      <div className="tabs-container">
        <Tabs />
      </div>
      <div className="scrollable-container">
        <div className="gradient-overlay"></div>
        <AgendaList agenda={agenda} />
      </div>
    </main>
  );
}

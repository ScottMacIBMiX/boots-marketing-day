"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./tabs.scss";
import SpeakersIcon from "../../modules/tabIcons/SpeakersIcon";
import AgendaIcon from "../../modules/tabIcons/AgendaIcon";
import MessagesIcon from "../../modules/tabIcons/MessagesIcon";
import GraphIcon from "@/modules/tabIcons/GraphIcon";

const IBMPlexSans = localFont({ src: "../../fonts/IBMPlexSans-Regular.ttf" });

const Tabs = () => {
  const pathname = usePathname();

  const handleSpeakerClick = (e: any) => {
    e.preventDefault();
    window.location.href = "/info/speakers";
  };

  const handleAgendaClick = (e: any) => {
    e.preventDefault();
    window.location.href = "/info/agenda";
  };

  const handleMessagesClick = (e: any) => {
    e.preventDefault();
    window.location.href = "/info/message";
  };

  const handleResultsClick = (e: any) => {
    e.preventDefault();
    window.location.href = "/info/voting-closed";
  };

  return (
    <div className={`tabs ${IBMPlexSans.className}`}>
      <Link href="/info/speakers">
        <div
          className={`tab ${pathname === "/info/speakers" ? "active" : ""}`}
          onClick={handleSpeakerClick}
        >
          <div className="icon">
            <SpeakersIcon selected={pathname === "/info/speakers"}/>
          </div>
          <span>Speakers</span>
        </div>
      </Link>

      <Link href="/info/agenda">
        <div
          className={`tab ${pathname === "/info/agenda" ? "active" : ""}`}
          onClick={handleAgendaClick}
        >
          <div className="icon">
            <AgendaIcon selected={pathname === "/info/agenda"}/>
          </div>
          <span>Agenda</span>
        </div>
      </Link>

      <Link href="/info/message">
        <div
          className={`tab ${pathname === "/info/message" ? "active" : ""}`}
          onClick={handleMessagesClick}
        >
          <div className="icon">
            <MessagesIcon selected={pathname === "/info/message"}/>
          </div>
          <span>Vote</span>
        </div>
      </Link>
      <Link href="/info/voting-closed">
        <div
          className={`tab ${pathname === "/info/voting-closed" ? "active" : ""}`}
          onClick={handleResultsClick}
        >
          <div className="icon">
            <GraphIcon/>
          </div>
          <span>Results</span>
        </div>
      </Link>
    </div>
  );
};

export default Tabs;

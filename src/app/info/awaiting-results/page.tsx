"use client";

import "./results-page.scss";
import Header from "@/Components/Header/Header";
import Tabs from "@/Components/Tabs/Tabs";  

export default function Home() {
  return (
    <main className="results-main">
      <Header />
      <div className="tabs-container">
        <Tabs />
      </div>
      <div className="results-content">
        <div className="results-content__top">
          <div className="title_vote">
            <h1>Awaiting Results</h1>
          </div>
          <div className="info_vote">
            <h1>
             Please check back in a few minutes the votes are still being collected. In the meantime why not take a look at some of our <a href="https://www.ibm.com/blog/category/client-stories/">IBM Client Stories</a>?
            </h1>
          </div>
          </div>
      </div>
    </main>
  );
}

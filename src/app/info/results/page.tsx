"use client";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import "./results-page.scss";
import Header from "@/Components/Header/Header";
import Tabs from "@/Components/Tabs/Tabs";
import base from "@/utils/airtable";
import { useEffect, useState } from "react";

interface CounterObject {
  vote: string;
  quantity: number;
}

interface DataSet {
  x: string;
  y: number;
  fill: string;
}

export default function Home() {
  const inputValues: CounterObject[] = [];
  const [votes, setVotes] = useState<CounterObject[]>();
  const [seeResults, setSeeResults] = useState<boolean>();

  const handleRecord = async (newValue: string) => {
    let newFlag = true;
    inputValues.forEach((value) => {
      if (value.vote === newValue) {
        newFlag = false;
        value.quantity = value.quantity + 1;
      }
    });
    if (newFlag) {
      inputValues.push({ vote: newValue, quantity: 1 });
    }
  };
  useEffect(() => {
    try {
      base(`Submitted Votes`)
        .select()
        .eachPage((records) => {
          records.forEach((record) =>
            handleRecord(record.fields.Vote! as string)
          );
        });
      setVotes(inputValues);
    } catch (error) {
      console.error(`Error retrieving form data from Airtable:`, error);
    }
  }, []);

  const getData = () => {
    let data: { x: string; y: number; fill: string }[] = [];
    if (votes) {
      votes.forEach((value) => {
        console.log("ping");
        data.push({ x: value.vote, y: value.quantity, fill: "#0043ce" });
        console.log(data);
      });
    }
    return data;
  };
  return (
    <main className="results-main">
      <Header />
      <div className="tabs-container">
        <Tabs />
      </div>
      <div className="results-content">
        <div className="results-content__top">
          <div className="title_vote">
            <h1>Vote Results</h1>
          </div>
          <div className="info_vote">
            <h1>
              Below is the results for the voting for the audiences favourite
              pitch. Although results may be shown on this page, please refresh
              often to allow for updates to be shown in a timely fashion.
            </h1>
          </div>
          <div className="button-container">
            <button
              className="button"
              onClick={() => setSeeResults(!seeResults)}
            >
              {seeResults ? "Hide Results" : "Reveal Results"}
            </button>
          </div>
          <div
            className={
              votes?.length! > 0 ? (seeResults ? "tilt-in-fwd-tr" : "roll-out-left ") : "hidden"
            }
          >
            <VictoryChart domainPadding={{ x: 20 }} theme={VictoryTheme.clean}>
              <VictoryBar data={getData()} labels={({ datum }) => datum.y} />
            </VictoryChart>
          </div>
        </div>
        {/*
        <div className="results-content__bottom">Winning Team: A</div>
        */}
      </div>
    </main>
  );
}

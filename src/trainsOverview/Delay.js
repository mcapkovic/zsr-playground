import React, { useState, useEffect } from "react";
import { prepareData } from "./utils";
import { getTrains } from "./api";

function Delay() {
  const [trains, setTrains] = useState("");

  useEffect(() => {
    getTrains().then(response => {
      console.log(prepareData(response.result));
      setTrains(prepareData(response.result));
    });
  }, []);

  return (
    <>
      <div>All trains: {trains.count}</div>
      <div>
        Delayed trains: {trains.countDelayed} ({trains.delayPercent}%)
      </div>
      <div>Average delay: {trains.delayAvg}m</div>
      <div>Max delay: {trains.delayMax}m</div>
    </>
  );
}

export default Delay;

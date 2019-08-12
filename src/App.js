//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [outerTimeMinutes, setOuterTimeMinutes] = useState(1);
  const [innerTimeMinutes, setInnerTimeMinutes] = useState(5);
  const [outerTimeSeconds, setOuterTimeSeconds] = useState(0);
  const [innerTimeSeconds, setInnerTimeSeconds] = useState(0);
  const [quarter, setQuarter] = useState(1);

  useEffect(() => {
    let interval = setTimeout( () => {

        if (outerTimeSeconds !== 0){
          setOuterTimeSeconds(outerTimeSeconds - 1);
        } else{
          setOuterTimeSeconds(outerTimeSeconds + 9);
          if (innerTimeSeconds !== 0){
            setInnerTimeSeconds(innerTimeSeconds - 1);
          } else{
            setInnerTimeSeconds(innerTimeSeconds + 5);
            if (innerTimeMinutes !== 0){
              setInnerTimeMinutes(innerTimeMinutes - 1);
            } else{
              setInnerTimeMinutes(innerTimeMinutes + 9);
              if (outerTimeMinutes !== 0){
                setOuterTimeMinutes(outerTimeMinutes - 1);
              } else{
                setOuterTimeMinutes(outerTimeMinutes + 1);
                if (quarter !== 4){
                  setQuarter(quarter + 1);
                } else{
                  setQuarter(quarter - 3);
                }
              }
            }
          }
        }
    }, 1000 );
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Vikings</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{outerTimeMinutes}{innerTimeMinutes}:{innerTimeSeconds}{outerTimeSeconds}</div>
          <div className="away">
            <h2 className="away__name">Bears</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarterNum = {quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>SKOL!</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Skol!</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

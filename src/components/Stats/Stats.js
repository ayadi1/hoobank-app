import React from "react";
import "./Stats.css";
import { stats } from "../../constants";
import Stat from "./Stat";
export default function Stats() {
  return (
    <div className="app__Stats">
      {stats.map((s) => (
        <>
          <Stat title={s.title} value={s.value} key={s.title} />
          <div className="line"></div>
        </>
      ))}
    </div>
  );
}

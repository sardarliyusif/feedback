import React from "react";
import { Status } from "../../data/statuses";
import { map , filter} from "lodash";
import "./style.scss";
export const Statuses = () => {
  return (
    <div className="statuses">
      {map(filter(Status , (e) => e !== "suggestion" ) , (e) => {
        return (
            <div>{e}</div>
        )
      })}
      {/* <div>ffg</div>
      <div>ffg</div>
      <div>ffg</div> */}
    </div>
  );
};

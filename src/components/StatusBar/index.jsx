import React from "react";
import { StatusCircle } from "../StatusCircle";
import './style.scss'

export const StatusBar = () => {
  return (
    <>
      <div className="status">
        <StatusCircle name = 'planned'/>
        <div className="status__count">2</div>
      </div>
      <div className="status">
        <StatusCircle name = 'progress'/>
        <div className="status__count">3</div>
      </div>
      <div className="status">
        <StatusCircle name = 'live'/>
        <div className="status__count">1</div>
      </div>
    </>
  );
};

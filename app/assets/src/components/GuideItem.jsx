import React, { Component } from "react";
import { observer } from "mobx-react";

const GuideItem = ({step}) => (
    <div className="panel">
        <h2>{step.title}</h2>
        <p>{step.text}</p>
    </div>
);

export default GuideItem;
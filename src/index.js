import React from "react";
import ReactDOM from "react-dom";

const tmpTime = new Date();
const tmpHour = tmpTime.getHours();
var tmpDayTime = "";
var tmpStyle = {
  color: "purple"
};

if (tmpHour >= 12 && tmpHour < 18) {
  tmpDayTime = "Good afternoon";
  tmpStyle.color = "green";
} else if (tmpHour >= 18) {
  tmpDayTime = "Good evening";
  tmpStyle.color = "blue";
} else {
  tmpDayTime = "Good morning";
  tmpStyle.color  = "red";
};

ReactDOM.render(<h1 style={tmpStyle}>{tmpDayTime}</h1>, document.getElementById("root"));

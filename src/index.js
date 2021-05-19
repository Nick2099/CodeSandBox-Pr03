import React from "react";
import ReactDOM from "react-dom";

const tmpTime = new Date();
const tmpHour = tmpTime.getHours();
var tmpDayTime = "";

if (tmpHour >= 12 && tmpHour < 18) {
  tmpDayTime = "Good afternoon";
} else if (tmpHour >= 18) {
  tmpDayTime = "Good evening";
} else {
  tmpDayTime = "Good morning";
};

ReactDOM.render(<h1>{tmpDayTime}</h1>, document.getElementById("root"));

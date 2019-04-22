import React, { Fragment } from "react";
import "styled-components/macro";
import Calendar from "../components/Calendar";

export default () => {
  return (
    <div
      css={`
        display: grid;
        grid-template: "calendar today" "progress progress";
        grid-gap: 10px;
        margin: 20px;
        margin-top: 100px;
      `}
    >
      <Calendar
        css={`
          grid-area: calendar;
          width: 100%;
        `}
      />
      <div
        css={`
          border: solid 1px gray;
          grid-area: today;
        `}
      />
      <div
        css={`
          border: solid 1px gray;
          grid-area: progress;
          height: 200px;
        `}
      />
    </div>
  );
};

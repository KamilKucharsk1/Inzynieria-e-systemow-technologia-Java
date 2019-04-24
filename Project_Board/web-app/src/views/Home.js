import React, { Fragment } from "react";
import "styled-components/macro";
import { Calendar, Today, Progress } from "../components";

const tab = [
  {
    day: 0,
    habits: [{ name: "running", done: true }, { name: "reading", done: false }]
  },
  {
    day: 1,
    habits: [{ name: "reading", done: false }]
  },
  {
    day: 2,
    habits: [{ name: "running", done: true }, { name: "reading", done: false }]
  },
  {
    day: 3,
    habits: [
      {
        name: "running",
        done: true,
        foto:
          "https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg"
      },
      {
        name: "reading",
        done: false,
        foto:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/site/54/images/BhPgYb7ATwCkxpVFmMjF_635892552728342323-2053461056_Woman-reading-a-book-014.jpg"
      },
      {
        name: "biking",
        done: false,
        foto:
          "https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-25AM_MtnBiking_0184.jpg"
      }
    ]
  },
  {
    day: 4,
    habits: [{ name: "running", done: true }, { name: "reading", done: false }]
  },
  {
    day: 5,
    habits: [{ name: "running", done: true }]
  },
  {
    day: 6,
    habits: [{ name: "running", done: true }]
  }
];

export default () => {
  const today = new Date();
  return (
    <div
      css={`
        display: grid;
        grid-template: "calendar today" "progress progress";
        grid-gap: 30px;
        margin: 20px;
        margin-top: 100px;
      `}
    >
      <Calendar
        tab={tab}
        css={`
          grid-area: calendar;
          width: 100%;
        `}
      />
      <Today
        habits={tab[today.getDay()]}
        css={`
          grid-area: today;
        `}
      />
      <Progress
        css={`
          grid-area: progress;
        `}
      />
    </div>
  );
};

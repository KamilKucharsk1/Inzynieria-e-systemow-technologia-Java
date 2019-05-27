import React, { Fragment } from "react";
import "styled-components/macro";
import { Calendar, Today, Progress } from "../components";

const tab = [
  {
    day: 0,
    habits: [
      {
        name: "running",
        done: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        name: "reading",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 1,
    habits: [
      {
        name: "reading",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 2,
    habits: [
      {
        name: "running",
        done: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        name: "reading",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 3,
    habits: [
      {
        name: "running",
        done: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        name: "reading",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        name: "biking",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 4,
    habits: [
      {
        name: "running",
        done: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        name: "reading",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 5,
    habits: [
      {
        name: "running",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    day: 6,
    habits: [
      {
        name: "running",
        done: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
];

export default () => {
  const today = new Date();
  return (
    <div
      css={`
        display: grid;
        grid-template:
          "calendar today"
          "calendar progress";
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

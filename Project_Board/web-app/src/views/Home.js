import React, { Fragment, useEffect, useState } from "react";
import { Calendar, Today, Progress } from "../components";
import "styled-components/macro";
import axios from "axios";

import config from "../utils/config";

const tab1 = [
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

const done = [
  "Mon_done",
  "Tue_done",
  "Wed_done",
  "Thu_done",
  "Fri_done",
  "Sat_done",
  "Sun_done"
];
const activ = [
  "Monday_active",
  "Tuesday_active",
  "Wednesday_active",
  "Thursday_active",
  "Friday_active",
  "Saturday_active",
  "Sunday_active"
];

export default ({ user_id }) => {
  const today = new Date();
  const [data, setData] = useState([]);

  const fetchData = id => {
    const { server_url } = config;
    axios.get(`${server_url}/users/1/habits`).then(resp => {
      console.log("users fetching");
      console.log(resp.data);
      setData(resp.data);
    });
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  let tab = [0, 1, 2, 3, 4, 5, 6].map(e => {
    const habits = [...data].map(habit => {
      const { name, description } = habit;
      return {
        name,
        description,
        done: habit[done[e]],
        active: habit[activ[e]]
      };
    });

    return {
      day: e,
      habits
    };
  });

  if (!tab) {
    return <div>Loading...</div>;
  }

  const filterTab = tab.map(e => {
    return {
      day: e.day,
      habits: e.habits.filter(el => el.active)
    };
  });

  console.log("filtered", filterTab);

  return (
    <div
      css={`
        display: grid;
        grid-template:
          "calendar today"
          "calendar progress";
        grid-gap: 30px;
        margin: 20px;
      `}
    >
      <div
        css={`
          grid-area: calendar;
          width: 100%;
        `}
      >
        <Calendar tab={filterTab} />
      </div>

      <div
        css={`
          grid-area: today;
        `}
      >
        <Today habits={filterTab[today.getDay()]} />
      </div>
      <div
        css={`
          grid-area: progress;
        `}
      >
        <Progress />
      </div>
    </div>
  );
};

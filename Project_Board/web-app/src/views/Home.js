import React, { Fragment, useEffect, useState } from "react";
import { Calendar, Today, Progress } from "../components";
import "styled-components/macro";
import axios from "axios";

import config from "../utils/config";

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

export default ({ user_id }) => {
  const today = new Date();
  const [data, setData] = useState(null);

  const fetchData = id => {
    const { server_url } = config;
    axios.get(`${server_url}/user/${id}`).then(resp => {
      console.log(resp.data);
      setData(resp.data);
    });
  };

  useEffect(() => {
    fetchData(user_id);
  }, []);

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
        <Calendar tab={tab} />
      </div>

      <div
        css={`
          grid-area: today;
        `}
      >
        <Today habits={tab[today.getDay()]} />
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

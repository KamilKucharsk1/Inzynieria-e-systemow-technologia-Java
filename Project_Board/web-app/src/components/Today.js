import React, { Fragment, useEffect, useState } from "react";
import { List, Image, Header, Button } from "semantic-ui-react";
import "styled-components/macro";
import axios from "axios";
import { config } from "../utils/config/config";
import { config_local } from "../utilrs/config/config_local";

export default ({ habits = [] }) => {
  useEffect(() => {}, []);

  const resolveHabit = id => {
    const { server_url } = config.config;
    axios
      .put(`${server_url}/habits/${id}/done`)
      .then(resp => console.log(resp));
  };

  const rejectHabit = id => {
    const { server_url } = config;
    axios
      .put(`${server_url}/habits/${id}/leave`)
      .then(resp => console.log(resp));
  };

  return (
    <div>
      <Header
        as="h3"
        css={`
          color: black;
        `}
      >
        Today's Activities
      </Header>
      <List selection verticalAlign="middle">
        {habits.habits.map((e, i) => {
          return (
            <List.Item
              key={i}
              css={`
                min-height: 50px;
                border: solid 1px hsl(0, 0%, 90%);
                margin-bottom: 15px !important;
              `}
            >
              <Image
                src={"photos/event.png"}
                css={`
                  width: 35px;
                  margin-left: 20px !important;
                  margin-right: 20px !important;
                `}
              />
              <List.Content>
                <List.Header
                  css={`
                    font-size: 16px;
                  `}
                >
                  <div
                    css={`
                      padding: 5px !important;
                    `}
                  >
                    {e.name}
                  </div>
                  <div
                    css={`
                      width: 50%;
                      padding: 5px !important;
                      font-weight: 100;
                      font-size: 12px;
                      color: hsl(0, 0%, 40%);
                    `}
                  >
                    {e.description}
                  </div>
                </List.Header>
                <div
                  css={`
                    position: absolute;
                    right: 0;
                    margin-top: -50px;
                  `}
                >
                  <Button
                    content="Done"
                    color="green"
                    css={`
                      position: absolute;
                      right: 115px;
                    `}
                    onClick={() => resolveHabit(e.id)}
                  />
                  <Button
                    content="Leave"
                    color="red"
                    css={`
                      position: absolute;
                      right: 25px;
                    `}
                    onClick={() => rejectHabit(e.id)}
                  />
                </div>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

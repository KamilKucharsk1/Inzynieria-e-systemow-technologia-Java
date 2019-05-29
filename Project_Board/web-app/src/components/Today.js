import React, { Fragment, useEffect, useState } from "react";
import { List, Image, Header, Icon, Button } from "semantic-ui-react";
import "styled-components/macro";
import axios from "axios";
import config from "../utils/config";

export default ({ habits = [] }) => {
  const [fotos, setFotos] = useState({});
  useEffect(() => {
    // if (habits) {
    //   habits.habits.map((e, i) => {
    //     const { name, done } = e;
    //     getPhoto(e.name).then(resp => {
    //       const url = resp.data.urls.small;
    //       console.log("fotos", fotos);
    //       setFotos({ ...fotos, [i]: url });
    //     });
    //     return {
    //       name,
    //       done
    //     };
    //   });
    // }
  }, []);

  const getPhoto = type => {
    return axios.get(`${config.photoAPI}&query=${type}`);
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
                  />
                  <Button
                    content="Leave"
                    color="red"
                    css={`
                      position: absolute;
                      right: 25px;
                    `}
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

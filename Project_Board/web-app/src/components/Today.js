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
              `}
            >
              <Image src={e.foto} size="small" />
              {/* <Icon name="book" size="large" /> */}
              <List.Content>
                <List.Header
                  css={`
                    font-size: 16px;
                  `}
                >
                  {e.name}
                </List.Header>
              </List.Content>
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
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

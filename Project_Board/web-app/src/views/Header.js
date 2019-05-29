import React, { useState } from "react";
import { withRouter } from "react-router";
import { Menu, Segment, Header, Icon } from "semantic-ui-react";
import "styled-components/macro";

export default withRouter(props => {
  const [view, setView] = useState("home");
  const { pathname } = props.location;
  return (
    <div
      css={`
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 100;
        border-radius: none !important;
      `}
    >
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="logo">
            <Header
              as="h3"
              css={`
                color: white;
              `}
            >
              HabitApp <Icon name="chart line" />
            </Header>
          </Menu.Item>
          {pathname !== "/" && (
            <Menu.Item
              name="home"
              active={pathname === "/home"}
              onClick={() => props.history.push("/home")}
            />
          )}
          {pathname !== "/" && (
            <Menu.Item
              name="habits"
              active={pathname === "/habits"}
              onClick={() => props.history.push("/habits")}
            />
          )}
          <Menu.Item
            name="LogOut"
            position="right"
            onClick={() => props.history.push("/")}
          />
        </Menu>
      </Segment>
    </div>
  );
});

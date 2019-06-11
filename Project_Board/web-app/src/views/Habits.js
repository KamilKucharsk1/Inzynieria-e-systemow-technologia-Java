import React, { Fragment, useState, useEffect } from "react";
import "styled-components/macro";
import { Calendar, Today, Progress } from "../components";
import { Button, Form, Radio } from "semantic-ui-react";

import { List, Segment } from "semantic-ui-react";
import config from "../utils/config";
import axios from "axios";

export default ({ user_id }) => {
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
  // const [
  //   updateValue,
  //   duration,
  //   setDuration,
  //   submitHandler,
  //   errors
  // ] = useHabitsForm({
  //   user_id

  if (!data) {
    return <div>Loading...</div>;
  }

  const habitsToShow = [...data].map(e => {
    return {
      name: e.name,
      description: e.description,
      duration: [],
      id: e.id
    };
  });

  const [duration, setDuration] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [prio, setPrio] = useState("");

  const value = "1";

  const onLoginSubmit = data => {
    const { server_url } = config;
    axios.post(`/${server_url}/habits`, data).then(resp => console.log(resp));
  };

  const updateDuration = day => {
    if (!duration.includes(day)) {
      setDuration([...duration, day]);
      console.log("add");
    } else {
      setDuration([...duration].filter(e => e !== day));
      console.log("remove");
    }
  };
  console.log(duration);
  return (
    <div
      css={`
        width: 100%;
        height: 100%;
        margin: 20px;
      `}
    >
      <Form
        onSubmit={e => {
          return axios
            .post("http://localhost:8080/users/1/habits", {
              user_id: 1,
              name,
              description: desc,
              id: "",
              Monday_active: duration.includes("Monday") ? 1 : 0,
              Tuesday_active: duration.includes("Tuesday") ? 1 : 0,
              Wednesday_active: duration.includes("Wednesday") ? 1 : 0,
              Thursday_active: duration.includes("Thursday") ? 1 : 0,
              Friday_active: duration.includes("Friday") ? 1 : 0,
              Saturday_active: duration.includes("Saturday") ? 1 : 0,
              Sunday_active: duration.includes("Sunday") ? 1 : 0
            })
            .then(res => {
              console.log(res);
            })
            .catch(error => console.log("error", error));
        }}
        css={`
          margin-left: 20%;
          margin-right: 20%;
          background-color: hsl(0, 0%, 97%);
          border: solid 1px rgba(34, 36, 38, 0.15);
          padding: 20px;
        `}
      >
        <Form.Input
          cy="form-name"
          required
          name="name"
          icon="paper plane outline"
          iconPosition="left"
          placeholder="Habit name"
          onChange={e => setName(e.target.value)}
        />
        <Form.TextArea
          cy="form-description"
          required
          name="description"
          icon="edit"
          iconPosition="left"
          placeholder="Short description..."
          onChange={e => setDesc(e.target.value)}
        />
        <label>Frequency</label>
        <Form.Group
          inline={false}
          css={`
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            > div {
              background-color: hsl(0, 0%, 95%);
              padding: 5px;
              border: 1px solid hsl(0, 0%, 90%);
              margin: 5px !important;
            }
          `}
        >
          <Form.Field
            cy="form-monday"
            toggle
            control={Radio}
            label="Monday"
            onChange={() => updateDuration("Monday")}
          />
          <Form.Field
            toggle
            control={Radio}
            label="Tuesday"
            onChange={() => updateDuration("Tuesday")}
          />
          <Form.Field
            cy="form-wednesday"
            toggle
            control={Radio}
            label="Wednesday"
            onChange={() => updateDuration("Wednesday")}
          />
          <Form.Field
            toggle
            control={Radio}
            label="Thursday"
            onChange={() => updateDuration("Thursday")}
          />
          <Form.Field
            toggle
            control={Radio}
            label="Friday"
            onChange={() => updateDuration("Friday")}
          />
          <Form.Field
            cy="form-saturday"
            toggle
            control={Radio}
            label="Saturday"
            onChange={() => updateDuration("Saturday")}
          />
          <Form.Field
            toggle
            control={Radio}
            label="Sunday"
            onChange={() => updateDuration("Sunday")}
          />
        </Form.Group>

        <div>
          <Button cy="submit" content="Add habit" primary />
        </div>
        <div
          css={`
            position: absolute;
            width: 100%;
            margin-top: 5px;
            text-align: center;
            font-size: 11px;
          `}
        />
      </Form>

      <Segment
        css={`
          width: 60%;
          position: absolute;
          top: 20px;
          left: 20%;
        `}
      >
        <span
          css={`
            font-size: 20px;
            padding: 5px;
          `}
        >
          Habits List
        </span>
        <List>
          {habitsToShow.map((e, i) => {
            return (
              <Fragment>
                <List.Item
                  key={i}
                  css={`
                    height: 100px;
                    margin: 5px;
                    margin-bottom: 20px;
                    padding: 5px;
                    border-bottom: 1px solid hsl(0, 0%, 80%);
                  `}
                >
                  <List.Content
                    css={`
                      position: relative;
                    `}
                  >
                    <div
                      css={`
                        font-size: 20px;
                        margin-bottom: 10px;
                        font-weight: 800;
                        padding: 5px;
                      `}
                    >
                      {e.name}
                    </div>
                    <div
                      css={`
                        width: 80%;
                        margin: 5px;
                      `}
                    >
                      {e.description}
                    </div>
                    <div
                      css={`
                        margin-left: 5px;
                        margin-top: 5px;
                      `}
                    >
                      {e.duration.map((el, i) => {
                        return (
                          <span
                            css={`
                              margin-right: 10px;
                              color: hsl(0, 0%, 60%);
                              font-weight: 600;
                            `}
                          >
                            {el}
                          </span>
                        );
                      })}
                    </div>
                    <div
                      css={`
                        position: absolute;
                        right: 0;
                        bottom: 25px;
                      `}
                    >
                      <Button
                        color="red"
                        cy={`delete-habit-${i}`}
                        onClick={() => {
                          axios.delete(
                            `${config.server_url}/users/1/habits/${e.id}`
                          );
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </List.Content>
                </List.Item>
              </Fragment>
            );
          })}
        </List>
      </Segment>
    </div>
  );
};

import React, { Fragment } from "react";
import "styled-components/macro";
import { Calendar, Today, Progress } from "../components";
import { Button, Form, Radio } from "semantic-ui-react";
import useHabitsForm from "../customHooks/useHabitsForm";
import { List, Segment } from "semantic-ui-react";

const habits = [
  {
    name: "running",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: ["Monday", "Sunday"]
  },
  {
    name: "reading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: ["Monday", "Thursday"]
  },
  {
    name: "biking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duration: ["Monday", "Saturday"]
  }
];

export default ({}) => {
  const [
    updateValue,
    duration,
    setDuration,
    submitHandler,
    errors
  ] = useHabitsForm({
    login: null,
    password: null
  });

  const value = "1";

  const onLoginSubmit = () => {};

  const updateDuration = day => {
    if (!duration.includes(day)) {
      setDuration([...duration, day]);
      console.log("add");
    } else {
      setDuration([...duration].filter(e => e !== day));
      console.log("remove");
    }
  };

  return (
    <div
      css={`
        width: 100%;
        height: 100%;
        margin: 20px;
      `}
    >
      <Form
        onSubmit={e => submitHandler(e, onLoginSubmit)}
        css={`
          margin-left: 20%;
          margin-right: 20%;
          margin-top: 120px;
          background-color: hsl(0, 0%, 97%);
          border: solid 1px rgba(34, 36, 38, 0.15);
          padding: 20px;
        `}
      >
        <Form.Input
          required
          error={!!errors.name}
          name="name"
          icon="paper plane outline"
          iconPosition="left"
          placeholder="Habit name"
          onChange={updateValue}
        />
        <Form.TextArea
          required
          error={!!errors.description}
          name="description"
          icon="edit"
          iconPosition="left"
          placeholder="Short description..."
          onChange={updateValue}
        />
        <label>Frequency</label>
        <Form.Group
          inline={false}
          css={`
            > div {
              background-color: hsl(0, 0%, 95%);
              padding: 5px;
              border: 1px solid hsl(0, 0%, 90%);
            }
          `}
        >
          <Form.Field
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
          <Button content="Add habit" primary />
        </div>
        <div
          css={`
            position: absolute;
            width: 100%;
            margin-top: 5px;
            text-align: center;
            font-size: 11px;
          `}
        >
          {errors &&
            Object.values(errors).map((e, i) => (
              <span
                key={i}
                css={`
                  color: red;
                  padding: 5px;
                `}
              >
                {e}
              </span>
            ))}
        </div>
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
          {habits.map((e, i) => {
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
                      {e.duration.map((e, i) => {
                        return (
                          <span
                            css={`
                              margin-right: 10px;
                              color: hsl(0, 0%, 60%);
                              font-weight: 600;
                            `}
                          >
                            {e}
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
                      <Button color="red">X</Button>
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

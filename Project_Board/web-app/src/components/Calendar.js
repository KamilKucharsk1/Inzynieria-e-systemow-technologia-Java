import React, { Fragment } from "react";
import { Icon, Table } from "semantic-ui-react";
import "styled-components/macro";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

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
    habits: [{ name: "running", done: true }]
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
  const currentDat = new Date();
  const today = currentDat.getDay();
  return (
    <div>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Calendar</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Day</Table.HeaderCell>
            <Table.HeaderCell>Habit</Table.HeaderCell>
            <Table.HeaderCell>Done</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tab.map((e, i) => {
            const { habits, day } = e;
            return habits.map((el, i) => {
              return (
                <>
                  <Table.Row
                    css={today === day && `background-color: #e6f5ff;`}
                    key={i}
                  >
                    {habits.indexOf(el) === 0 && (
                      <Table.Cell
                        css={today === day && `font-weight: bold;`}
                        rowSpan={habits.length}
                      >
                        {days[day]}
                      </Table.Cell>
                    )}
                    <Table.Cell key={i}>{el.name}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {today <= day ? (
                        <Icon color="blue" name="circle" size="small" />
                      ) : el.done ? (
                        <Icon color="green" name="checkmark" size="large" />
                      ) : (
                        <Icon color="red" name="times" size="large" />
                      )}
                    </Table.Cell>
                  </Table.Row>
                </>
              );
            });
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

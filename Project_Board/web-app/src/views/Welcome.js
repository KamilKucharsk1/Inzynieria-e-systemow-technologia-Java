import React, { useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header
} from "semantic-ui-react";
import "styled-components/macro";
import axios from "axios";
import * as firebase from "firebase";

import config from "../utils/config";
import useLoginForm from "../customHooks/useLoginForm";

export default withRouter(props => {
  const [view, setView] = useState("login");
  const [loading, setLoading] = useState(false);
  const [failedAuth, setFailedAuth] = useState(false);

  const [updateValue, submitHandler, errors] = useLoginForm({
    login: null,
    password: null
  });

  const onLoginSubmit = data => {
    const { server_url } = config;
    const { login, password } = data;
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then(resp => {
        if (resp.user.email) {
          props.history.push("/home");
        }
      })
      .catch(function(error) {
        setFailedAuth(true);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      {view === "login" && (
        <div
          css={`
            margin: 150px auto;
            width: 50vw;
          `}
        >
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Header
                  as="h3"
                  css={`
                    margin-left: auto;
                    margin-right: auto;
                    width: 250px;
                    text-align: center;
                  `}
                >
                  Login to HabitApp!
                </Header>
                <Form onSubmit={e => submitHandler(e, onLoginSubmit)}>
                  <Form.Input
                    cy="login"
                    required
                    error={errors.login}
                    name="login"
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    onChange={updateValue}
                  />
                  <Form.Input
                    cy="password"
                    required
                    error={errors.password}
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Password"
                    onChange={updateValue}
                  />

                  <Button
                    content="Login"
                    primary
                    cy="submit"
                    loading={loading}
                  />
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
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Button
                  content="Sign up"
                  icon="signup"
                  size="big"
                  onClick={() => setView("registration")}
                />
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </div>
      )}
      {view === "registration" && (
        <div
          css={`
            margin: 150px auto;
            width: 50vw;
          `}
        >
          <Segment
            placeholder
            css={`
              height: 370px;
            `}
          >
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Header
                  as="h3"
                  css={`
                    margin-left: auto;
                    margin-right: auto;
                    width: 250px;
                    text-align: center;
                  `}
                >
                  Create an new account in HabitApp!
                </Header>
                <Form onSubmit={onLoginSubmit}>
                  <Form.Input
                    required
                    icon="male"
                    iconPosition="left"
                    placeholder="Fullname"
                  />
                  <Form.Input
                    required
                    icon="mail"
                    iconPosition="left"
                    type="email"
                    placeholder="E-mail"
                  />
                  <Form.Input
                    required
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Input
                    required
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Repeat password"
                  />

                  <Button content="Submit" primary />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Button
                  content="Sign in"
                  icon="signup"
                  size="big"
                  onClick={() => setView("login")}
                />
              </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </div>
      )}
      {failedAuth && (
        <div
          css={`
            margin-left: auto;
            margin-right: auto;
            margin-top: -120px;
            background: #e0b4b4 !important;
            color: #9f3a38;
            border: 1px solid #9f3a38 !important;
            width: 50vw;
            fonti-size: 16px;
            padding: 10px;
          `}
        >
          Bad login or password.
        </div>
      )}
    </Fragment>
  );
});

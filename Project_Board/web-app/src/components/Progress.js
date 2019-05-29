import React from "react";
import { Progress } from "semantic-ui-react";
import "styled-components/macro";

export default ({ habits }) => {
  return (
    <div
      css={`
        display: grid;
      `}
    >
      <Progress percent={50} success>
        running
      </Progress>

      <Progress percent={60} success>
        reading
      </Progress>

      <Progress percent={30} success>
        biking
      </Progress>
    </div>
  );
};

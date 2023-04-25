/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow={value}
    >
      <Bar style={{ width: value + "%" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
`;

const Bar = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;

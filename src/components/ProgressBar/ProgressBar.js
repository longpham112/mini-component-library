/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
  },
  medium: {
    height: 12,
  },
  large: {
    height: 16,
  },
};

const ProgressBar = ({ value, size }) => {
  const Styles = SIZES[size];

  if (!Styles) {
    throw new Error(`There is no Styles with ${value}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow={value}
    >
      <Bar style={{ width: value + "%", height: Styles.height + "px" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};

  /* trim off the right side when progress bar full */
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;

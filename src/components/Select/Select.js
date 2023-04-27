import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <DecorationBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </DecorationBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  /* hide this div behind DecorationBit */
  opacity: 0;
`;

const DecorationBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 2px solid blue;
    outline: 2px solid -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);

  /* make it so we can click through the chevron */
  pointer-events: none;
`;

export default Select;

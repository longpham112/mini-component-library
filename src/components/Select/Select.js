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
      <DecorationBit>Content</DecorationBit>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NativeSelect = styled.select``;

const DecorationBit = styled.div``;
export default Select;

import React from 'react';
import styled from 'styled-components/macro';
import {COLORS, WEIGHTS} from "../../constants";

export const Flag = ({ variant }) => {
  if (variant === "default") return <></>;

  let text;
  if (variant === "on-sale") text = "Sale";
  if (variant === "new-release") text = "Just Released!";

  return <Wrapper variant={variant}>{text}</Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  color: ${COLORS.white};
  background-color: ${p => ({
    "on-sale": COLORS.primary,
    "new-release": COLORS.secondary
  }[p.variant])};
  padding: 8px;
  border-radius: 2px;
  font-weight: ${WEIGHTS.medium};
  font-size: ${14 / 18}rem;
`

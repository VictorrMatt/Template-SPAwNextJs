"use client";

import styled from "styled-components";

// Main Layout
export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  gap: 6rem;
`;
const ColumnContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.$align === "left" ? "flex-start" : "flex-end"};
`;

export const Column = ({ align, children }) => {
  return <ColumnContainer align={align}>{children}</ColumnContainer>;
};

import styled from "styled-components";

const PropertiesForLabels = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled(PropertiesForLabels)`
  gap: 0.5rem;
`;

export const Div = styled(PropertiesForLabels)`
  align-items: center;
  justify-content: center;
  width: 20.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.COLORS.TAGS};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 3px;
`;

export const H3 = styled.h3`
  font-family: "Roboto Condensed";
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

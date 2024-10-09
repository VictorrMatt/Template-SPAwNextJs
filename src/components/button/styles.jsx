import styled from "styled-components";
import { H3 } from "../labelTag/styles";

export const Button = styled.div`
  width: 20rem;
  height: 7.2rem;
  background-color: ${({ theme }) => theme.COLORS.TEXT_1};
  border-radius: 3px;
  border: none;

  //
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonH3 = styled(H3)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  letter-spacing: 0;
  font-weight: 500;
`;

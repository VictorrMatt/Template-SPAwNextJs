import styled from "styled-components";

export const HeadBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10.9rem;
  width: 100vw;
  padding: 0 10rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};
`;

export const Logo = styled.p`
  font-family: "Roboto Mono";
  font-weight: bold;
  font-size: 2.4rem;
`;

export const NavHolder = styled.div`
  display: flex;
  gap: 40px;

  a {
    font-family: "Roboto Mono";
    font-weight: 300;
    font-size: 2.4rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

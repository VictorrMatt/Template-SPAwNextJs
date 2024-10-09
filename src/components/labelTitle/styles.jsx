import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  font-family: "Roboto Mono";
  font-size: ${({ large_text }) => (large_text ? "3.6rem" : "2.4rem")};
  /* font-size: ${({ largeText }) => {
    switch (largeText) {
      case "True":
        return "3.6rem";
      default:
        return "2.4rem";
    }
  }}; */
  font-weight: 200;
  color: ${({ theme }) => theme.COLORS.TEXT_2};
`;

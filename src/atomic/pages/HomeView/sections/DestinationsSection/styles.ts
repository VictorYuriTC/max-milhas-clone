import styled from "styled-components";
import { SectionPadding } from "../../styles";
import { Colors } from "@/foundations/Colors/Colors";

export const SectionContainer = styled.section`
  ${SectionPadding}
`;

export const PreTitle = styled.h4`
  color: ${Colors.GRAY_300};
  font-weight: 400;
`;

export const Title = styled.h2`
  padding-top: 8px;
  color: ${Colors.BLACK};
  font-size: calc(20px + 0.5vw);
  line-height: calc(28px + 0.5vw);
`;

export const CardsContainer = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

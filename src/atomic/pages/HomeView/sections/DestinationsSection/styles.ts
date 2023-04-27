import styled from "styled-components";
import { SectionPadding } from "../../styles";

export const SectionContainer = styled.section`
  ${SectionPadding}

  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-top: 100px;

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

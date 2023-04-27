import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";
import { SectionPadding } from "../../styles";

export const SectionContainer = styled.section`
  ${SectionPadding}

  padding-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: ${Media.MEDIA_760}) {
    grid-template-columns: 1fr 1fr;
  }
`;

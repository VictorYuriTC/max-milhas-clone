import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";
import { SectionPaddingX } from "../../styles";

export const SectionContainer = styled.section`
  ${SectionPaddingX}

  padding-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: ${Media.MEDIA_760}) {
    grid-template-columns: 1fr 1fr;
  }
`;

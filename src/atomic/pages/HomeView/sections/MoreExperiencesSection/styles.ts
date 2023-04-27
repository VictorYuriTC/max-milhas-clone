import { Colors } from "@/foundations/Colors/Colors";
import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";
import { SectionPadding } from "../../styles";

export const SectionContainer = styled.section`
  ${SectionPadding}

  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${Colors.BLACK};
  font-size: calc(20px + 0.5vw);
  font-weight: 700;
`;

export const ExperiencesContainer = styled.div`
  padding-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media screen and (min-width: ${Media.MEDIA_560}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${Media.MEDIA_960}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

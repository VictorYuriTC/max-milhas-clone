import { Colors } from "@/foundations/Colors/Colors";
import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
`;

export const PreTitle = styled.h4`
  color: ${Colors.GRAY_400};
  text-align: center;
`;

export const Title = styled.h2`
  padding-top: 8px;
  color: ${Colors.DARK};
  text-align: center;
`;

export const CardsContainer = styled.div`
  padding-top: 40px;
  display: flex;
  column-gap: 24px;
  row-gap: 48px;
  flex-direction: column;

  @media screen and (min-width: ${Media.MEDIA_760}) {
    flex-direction: row;
  }
`;
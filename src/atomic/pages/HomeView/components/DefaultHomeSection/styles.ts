import styled from "styled-components";
import { SectionPadding } from "../../styles";
import { Media } from "@/foundations/Media/Media";
import { Colors } from "@/foundations/Colors/Colors";

export const SectionContainer = styled.section`
  ${SectionPadding}
  background-color: ${Colors.GRAY_1100};

  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 48px;
`;

export const ImageContainer = styled.div`
  height: 200px;
  @media screen and (min-width: ${Media.MEDIA_560}) {
    height: 100%;
  }
`;

export const PreTitle = styled.h4`
  padding-top: 24px;
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

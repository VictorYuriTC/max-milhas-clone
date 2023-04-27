import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  padding-top: 100px;
`;

export const LandingTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  padding-left: 40px;
  padding-right: 20px;

  background-color: ${Colors.SUCCESS_LIGHT};
  border-radius: 16px;

  @media screen and (min-width: 1080px) {
    width: 45%;
  }
`;

export const LandingText = styled.h1`
  color: ${Colors.BLACK};
  font-size: calc(28px + 1vw);
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media screen and (min-width: 1080px) {
    width: 45%;
  }
`;

export const HalfRectangleLeft = styled.div`
  @media screen and (min-width: 1080px) {
    width: 5%;
    border: 4px solid ${Colors.SUCCESS_LIGHT};
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-left: 0;
  }
`;

export const HalfRectangleRight = styled.div`
  @media screen and (min-width: 1080px) {
    width: 5%;
    border: 4px solid ${Colors.SUCCESS_LIGHT};
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-right: 0;
  }
`;

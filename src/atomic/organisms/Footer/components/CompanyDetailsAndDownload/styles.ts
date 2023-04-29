import { Colors } from "@/foundations/Colors/Colors";
import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";

export const ComponentContainer = styled.footer`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${Media.MEDIA_960}) {
    justify-content: space-between;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 24px;
`;

export const HeadquartersContainer = styled.div``;

export const CompanyDetailsText = styled.p`
  padding-top: 8px;
  color: ${Colors.GRAY_200};
  max-width: 100%;
  font-size: calc(11px + 0.1vw);
`;

export const SealOfQualityContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const RightSideContainer = styled.div`
  display: none;

  @media screen and (min-width: ${Media.MEDIA_960}) {
    display: flex;
    gap: 12px;
  }
`;

export const DownloadAppText = styled.h4`
  color: ${Colors.BLACK};
`;

import { Media } from "@/foundations/Media/Media";
import styled, { css } from "styled-components";

export const PageContainer = styled.main``;

interface ISectionPadding {
  selectedSpacing?: "margin" | "padding";
}

export const SectionPadding = css<ISectionPadding>`
  padding-right: 8px;
  padding-left: 8px;

  @media screen and (min-width: ${Media.MEDIA_360}) {
    padding-right: 24px;
    padding-left: 24px;
  }

  @media screen and (min-width: ${Media.MEDIA_560}) {
    padding-right: 36px;
    padding-left: 36px;
  }

  @media screen and (min-width: ${Media.MEDIA_760}) {
    padding-right: 48px;
    padding-left: 48px;
  }

  @media screen and (min-width: ${Media.MEDIA_1080}) {
    padding-right: 60px;
    padding-left: 60px;
  }

  @media screen and (min-width: ${Media.MEDIA_1200}) {
    padding-right: 72px;
    padding-left: 72px;
  }
`;

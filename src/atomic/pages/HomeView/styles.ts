import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 0 8px 0 8px;

  @media screen and (min-width: ${Media.MEDIA_360}) {
    padding: 0 24px 0 24px;
  }

  @media screen and (min-width: ${Media.MEDIA_560}) {
    padding: 0 36px 0 36px;
  }

  @media screen and (min-width: ${Media.MEDIA_760}) {
    padding: 0 48px 0 48px;
  }

  @media screen and (min-width: ${Media.MEDIA_1080}) {
    padding: 0 60px 0 60px;
  }

  @media screen and (min-width: ${Media.MEDIA_1200}) {
    padding: 0 72px 0 72px;
  }
`;

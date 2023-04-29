import { Colors } from "@/foundations/Colors/Colors";
import { Media } from "@/foundations/Media/Media";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: none;

  @media screen and (min-width: ${Media.MEDIA_960}) {
    display: flex;
    gap: 80px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ColumnTitle = styled.h3`
  color: ${Colors.GRAY_200};
  font-size: calc(13px + 0.25vw);
  font-weight: 600;
`;

export const ColumnSubTitle = styled.h4`
  color: ${Colors.GRAY_200};
  font-size: calc(11px + 0.25vw);
  font-weight: 600;
`;

export const ColumnLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: calc(11px + 0.25vw);
`;

export const ColumnLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${Colors.GRAY_300};

  &:hover {
    color: ${Colors.SECONDARY};
  }
`;
export const PaymentLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 24px;
`;

export const PaymentLinkSvgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export const ColumnLinkSvgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

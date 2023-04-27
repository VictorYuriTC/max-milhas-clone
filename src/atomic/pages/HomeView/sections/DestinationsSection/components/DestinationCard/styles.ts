import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${Colors.GRAY_800};

  &:hover {
    box-shadow: 0px 0px 20px ${Colors.GRAY_900};
  }
`;

export const PreTitle = styled.h4``;

export const Title = styled.h2`
  color: ${Colors.BLACK};
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
`;

export const TextContentContainer = styled.div`
  padding: 24px;
`;

export const DiscountContainer = styled.div`
  padding-top: 24px;
`;

export const DiscountText = styled.span``;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: 24px;
`;

export const DestinationName = styled.p`
  color: ${Colors.DARK};
  font-size: calc(14px + 0.5vw);
  font-weight: 600;
`;

export const DestinationDescription = styled.p`
  color: ${Colors.GRAY_300};
  font-size: calc(12px + 0.5vw);
`;

export const CoupomDescription = styled.span``;

export const CoupomHorizontalRule = styled.hr`
  border-top: 1px solid ${Colors.GRAY_800};
`;

export const CoupomName = styled.span`
  font-size: calc(12px + 0.5vw);
  color: ${Colors.GRAY_400};
  font-weight: 400;
`;

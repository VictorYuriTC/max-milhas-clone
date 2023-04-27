import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SvgContainer = styled.div`
  color: ${Colors.GRAY_500};
  width: 20px;
  height: 20px;
`;

export const TextContentContainer = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${Colors.DARK};
  font-size: calc(17px + 0.5vw);
`;

export const Description = styled.p`
  padding-top: 8px;
  color: ${Colors.GRAY_200};
  font-size: calc(16px + 0.25vw);
  font-weight: 500;
`;

import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  column-gap: 40px;
  border: 1px solid ${Colors.GRAY_800};
  border-radius: 24px;
  padding: 32px;
  color: ${Colors.GRAY_200};
  background-color: white;
`;

export const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export const Text = styled.span`
  font-size: calc(16px + 0.5vw);
`;

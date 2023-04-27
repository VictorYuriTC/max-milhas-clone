import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  column-gap: 8px;
  border-radius: 12px;

  color: ${Colors.GRAY_400};
  border: 1px solid ${Colors.GRAY_800};

  &:hover {
    color: ${Colors.GRAY_200};
    border-color: ${Colors.GRAY_200};
  }
`;

export const SvgContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const Text = styled.span`
  text-align: center;
  font-size: calc(14px + 0.5vw);
`;

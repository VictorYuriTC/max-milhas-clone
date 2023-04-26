import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
  color: ${Colors.GRAY_400};
`;

export const ComponentContainer = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 24px;
  border: solid 1px ${Colors.GRAY_400};
  padding: 8px 12px 8px 12px;

  &:hover {
    border-color: ${Colors.SECONDARY};

    ${SvgContainer} {
      color: ${Colors.SECONDARY};
    }
  }
`;

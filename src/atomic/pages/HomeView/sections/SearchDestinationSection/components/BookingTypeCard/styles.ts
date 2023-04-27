import { Colors } from "@/foundations/Colors/Colors";
import styled, { css } from "styled-components";

interface IComponentContainer {
  isSelected?: boolean;
}

export const ComponentContainer = styled.div<IComponentContainer>`
  display: flex;
  position: relative;
  cursor: pointer;

  color: ${({ isSelected }) =>
    isSelected ? Colors.SECONDARY : Colors.GRAY_400};

  &:hover {
    color: ${({ isSelected }) =>
      isSelected ? Colors.SECONDARY : Colors.GRAY_200};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        content: "";
        position: absolute;
        translate: 0px 28px;
        width: 100%;
        height: 2px;
        background-color: ${Colors.SECONDARY_DARK};
      }
    `}
`;

export const Content = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Text = styled.span`
  font-weight: 600;
`;

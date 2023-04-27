import { Colors } from "@/foundations/Colors/Colors";
import styled, { css } from "styled-components";

interface ILabel {
  isCurrentPath: boolean;
}

export const Label = styled.span<ILabel>`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  font-size: 16px;

  color: ${({ isCurrentPath }) =>
    isCurrentPath ? Colors.SECONDARY : Colors.GRAY_400};

  &:hover {
    color: ${Colors.SECONDARY};
  }

  ${({ isCurrentPath }) =>
    isCurrentPath &&
    css`
      &::after {
        content: "";
        position: absolute;
        translate: 0px 28px;
        width: 16px;
        height: 2px;
        background-color: ${Colors.SECONDARY_DARK};
      }
    `}
`;

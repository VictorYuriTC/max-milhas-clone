import styled, { css } from "styled-components";

interface ILabel {
  isCurrentPath: boolean;
}

export const Label = styled.span<ILabel>`
  display: inline-flex;
  flex-direction: column;
  font-size: 16px;

  color: ${({ isCurrentPath }) => (isCurrentPath ? "#CC338A" : "#64748B")};

  &:hover {
    color: #cc338a;
  }

  ${({ isCurrentPath }) =>
    isCurrentPath &&
    css`
      &::after {
        content: "";
        margin-top: 8px;
        width: 16px;
        height: 2px;
        background-color: #d3539a;
      }
    `}
`;

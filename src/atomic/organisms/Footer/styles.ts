import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export interface IOrganismContainer {
  paddingX?: any;
  paddingY?: any;
}

export const OrganismContainer = styled.footer<IOrganismContainer>`
  ${({ paddingX }) => paddingX}
  ${({ paddingY }) => paddingY}

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HorizontalRule = styled.hr`
  border: 2px solid ${Colors.GRAY_900};
`;

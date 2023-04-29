import styled from "styled-components";

export interface IOrganismContainer {
  paddingX?: any;
  paddingY?: any;
}

export const OrganismContainer = styled.header<IOrganismContainer>`
  ${({ paddingX }) => paddingX}
  ${({ paddingY }) => paddingY}

  position: fixed;
  background-color: white;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

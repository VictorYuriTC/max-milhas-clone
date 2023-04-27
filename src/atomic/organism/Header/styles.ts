import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";

export const ComponentContainer = styled.header`
  position: fixed;
  background-color: white;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 16px 84px 16px 84px;
`;

export const LogoContainer = styled.div`
  height: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

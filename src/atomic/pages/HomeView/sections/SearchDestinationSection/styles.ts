import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";
import { SectionPaddingX } from "../../styles";

export const SectionContainer = styled.section`
  ${SectionPaddingX}
`;

export const SearchMenu = styled.div`
  display: flex;
  column-gap: 20px;
  translate: 0px -60px;
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 40px;
  padding-bottom: 24px;
  box-shadow: 0px 0px 5px 0px ${Colors.GRAY_700};
`;

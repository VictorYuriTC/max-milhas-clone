import { Colors } from "@/foundations/Colors/Colors";
import styled from "styled-components";
import { RoundedTabType } from "./RoundedTab";

interface IAtomContainer {
  color: RoundedTabType;
}

export const AtomContainer = styled.span<IAtomContainer>`
  width: fit-content;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 24px;
  font-size: calc(12px + 0.25vw);

  background-color: ${({ color }) => {
    if (color === "gold") return Colors.GOLD_LIGHT;

    if (color === "success") return Colors.LIGHT;
  }};

  color: ${({ color }) => {
    if (color === "gold") return Colors.GOLD_DARK;

    if (color === "success") return Colors.SUCCESS;
  }};
`;

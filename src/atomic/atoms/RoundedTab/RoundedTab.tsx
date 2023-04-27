import { ReactNode } from "react";
import { AtomContainer } from "./styles";

export type RoundedTabType = "success" | "gold";

interface IProps {
  children: ReactNode;
  color: RoundedTabType;
}

export default function RoundedTab(props: IProps) {
  return <AtomContainer color={props.color}>{props.children}</AtomContainer>;
}

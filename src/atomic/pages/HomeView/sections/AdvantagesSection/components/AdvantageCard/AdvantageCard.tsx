import { ReactNode } from "react";
import {
  ComponentContainer,
  Description,
  SvgContainer,
  TextContentContainer,
  Title,
} from "./styles";

export interface IAdvantage {
  id: number;
  svg: ReactNode;
  title: string;
  description: string;
}

interface IProps {
  advantage: IAdvantage;
}

export default function AdvantageCard(props: IProps) {
  return (
    <ComponentContainer>
      <SvgContainer>{props.advantage.svg}</SvgContainer>

      <TextContentContainer>
        <Title>{props.advantage.title}</Title>

        <Description>{props.advantage.description}</Description>
      </TextContentContainer>
    </ComponentContainer>
  );
}

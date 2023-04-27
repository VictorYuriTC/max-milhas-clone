import { ReactNode } from "react";
import {
  ComponentContainer,
  Description,
  SvgContainer,
  TextContentContainer,
  Title,
} from "./styles";

export interface IDefaultHomeSectionCard {
  id: number;
  svg: ReactNode;
  title: string;
  description: string;
}

interface IProps {
  card: IDefaultHomeSectionCard;
}

export default function DefaultHomeCard(props: IProps) {
  return (
    <ComponentContainer>
      <SvgContainer>{props.card.svg}</SvgContainer>

      <TextContentContainer>
        <Title>{props.card.title}</Title>

        <Description>{props.card.description}</Description>
      </TextContentContainer>
    </ComponentContainer>
  );
}

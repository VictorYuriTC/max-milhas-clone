import { ReactNode } from "react";
import {
  ComponentContainer,
  Description,
  LinkContainer,
  SvgContainer,
  TextContentContainer,
  Title,
} from "./styles";
import Link from "next/link";

export interface IDefaultHomeSectionCard {
  id: number;
  svg: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
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

      {props.card.linkHref && (
        <Link href={props.card.linkHref}>
          <LinkContainer>{props.card.linkText}</LinkContainer>
        </Link>
      )}
    </ComponentContainer>
  );
}

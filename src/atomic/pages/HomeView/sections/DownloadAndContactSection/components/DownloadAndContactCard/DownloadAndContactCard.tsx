import { ReactNode } from "react";
import { ComponentContainer, Description, Title } from "./styles";

export interface IDownloadAndContact {
  id: number;
  title: string;
  description: string;
  linksContainer?: ReactNode;
  formContainer?: ReactNode;
}

interface IProps {
  cardData: IDownloadAndContact;
}

export default function DownloadAndContactCard(props: IProps) {
  return (
    <ComponentContainer>
      <Title>{props.cardData.title}</Title>

      <Description>{props.cardData.description}</Description>

      {props.cardData.linksContainer}

      {props.cardData.formContainer}
    </ComponentContainer>
  );
}

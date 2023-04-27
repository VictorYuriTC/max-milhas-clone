import { ReactNode } from "react";
import { ComponentContainer, SvgContainer, Text } from "./styles";

export interface IDownloadLink {
  id: number;
  svg: ReactNode;
  text: string;
  href: string;
}

interface IProps {
  downloadLink: IDownloadLink;
}

export default function DownloadLink(props: IProps) {
  return (
    <ComponentContainer>
      <SvgContainer>{props.downloadLink.svg}</SvgContainer>

      <Text>{props.downloadLink.text}</Text>
    </ComponentContainer>
  );
}

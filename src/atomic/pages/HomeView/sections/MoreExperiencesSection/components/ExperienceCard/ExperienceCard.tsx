import { ReactNode } from "react";
import { ComponentContainer, SvgContainer, Text } from "./styles";

export interface IExperience {
  id: number;
  svg: ReactNode;
  text: string;
}

interface IProps {
  experience: IExperience;
}

export default function ExperienceCard(props: IProps) {
  return (
    <ComponentContainer>
      <SvgContainer>{props.experience.svg}</SvgContainer>
      <Text>{props.experience.text}</Text>
    </ComponentContainer>
  );
}

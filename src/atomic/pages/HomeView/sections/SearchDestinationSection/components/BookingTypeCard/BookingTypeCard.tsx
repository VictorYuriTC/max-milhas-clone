import { IBookingType } from "@/interfaces/IDestination";
import { ComponentContainer, Content, Text } from "./styles";
import { ReactNode } from "react";

export interface IBookingCard {
  id: number;
  bookingType: string;
  svg: ReactNode;
}

interface IProps {
  cardData: IBookingCard;
  isSelected: boolean;
  onClick: () => void;
}

export default function BookingTypeCard(props: IProps) {
  return (
    <ComponentContainer onClick={props.onClick} isSelected={props.isSelected}>
      <Content>
        {props.cardData.svg}

        <Text>{props.cardData.bookingType}</Text>
      </Content>
    </ComponentContainer>
  );
}

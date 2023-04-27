import { IDestination } from "@/interfaces/IDestination";
import {
  ComponentContainer,
  CoupomDescription,
  CoupomHorizontalRule,
  CoupomName,
  DestinationDescription,
  DestinationName,
  DetailsContainer,
  DiscountContainer,
  DiscountText,
  ImageContainer,
  TextContentContainer,
} from "./styles";
import RoundedTab from "@/atomic/atoms/RoundedTab/RoundedTab";
import Image from "next/image";

interface IProps {
  destination: IDestination;
}

export default function DestinationCard(props: IProps) {
  return (
    <ComponentContainer>
      <ImageContainer>
        <Image
          alt=""
          src={props.destination.image}
          placeholder="blur"
          quality={100}
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      </ImageContainer>

      <TextContentContainer>
        <DiscountContainer>
          <RoundedTab color="success">
            <DiscountText>+{props.destination.discountValue}% OFF</DiscountText>
          </RoundedTab>
        </DiscountContainer>

        <DetailsContainer>
          <DestinationName>{props.destination.name}</DestinationName>

          <DestinationDescription>
            {props.destination.description}
          </DestinationDescription>

          <RoundedTab color="gold">
            <CoupomDescription>
              {props.destination.coupomDescription}
            </CoupomDescription>
          </RoundedTab>

          <CoupomHorizontalRule />

          <CoupomName>CUPOM: {props.destination.coupomName}</CoupomName>
        </DetailsContainer>
      </TextContentContainer>
    </ComponentContainer>
  );
}

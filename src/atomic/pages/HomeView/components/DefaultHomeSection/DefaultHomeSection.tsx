import {
  CardsContainer,
  ImageContainer,
  PreTitle,
  SectionContainer,
  Title,
} from "./styles";
import Image from "next/image";
import DefaultHomeCard, {
  IDefaultHomeSectionCard,
} from "./components/DefaultHomeCard/DefaultHomeCard";

interface IProps {
  image?: any;
  preTitle: string;
  title: string;
  arrayWithCards: IDefaultHomeSectionCard[];
}

export default function DefaultHomeSection(props: IProps) {
  return (
    <SectionContainer>
      {props.image && (
        <ImageContainer>
          <Image
            alt=""
            src={props.image}
            style={{
              borderRadius: "16px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            quality={100}
          />
        </ImageContainer>
      )}

      <PreTitle>{props.preTitle}</PreTitle>

      <Title>{props.title}</Title>

      <CardsContainer>
        {props.arrayWithCards.map((card) => (
          <DefaultHomeCard key={card.id} card={card} />
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}

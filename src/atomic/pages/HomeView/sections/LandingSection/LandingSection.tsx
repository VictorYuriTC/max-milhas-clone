import Image from "next/image";
import {
  HalfRectangleLeft,
  HalfRectangleRight,
  ImageContainer,
  LandingText,
  LandingTextContainer,
  SectionContainer,
} from "./styles";
import happyManOnCellphone from "../../../../../../public/images/happy-man-on-cellphone.webp";
import Nbsp from "@/atomic/atoms/RoundedTab/Nbsp/Nbsp";

export default function LandingSection() {
  return (
    <SectionContainer>
      <HalfRectangleLeft />

      <LandingTextContainer>
        <LandingText>Max é viajar mais com até 60% OFF</LandingText>
      </LandingTextContainer>

      <ImageContainer>
        <Image
          alt=""
          src={happyManOnCellphone}
          style={{
            borderRadius: "16px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImageContainer>

      <HalfRectangleRight />
    </SectionContainer>
  );
}

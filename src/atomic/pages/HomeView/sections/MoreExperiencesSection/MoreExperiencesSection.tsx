import ExperienceCard, {
  IExperience,
} from "./components/ExperienceCard/ExperienceCard";
import { ExperiencesContainer, SectionContainer, Title } from "./styles";
import { AiOutlineGift } from "react-icons/ai";
import { IoMdBed } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";

const mocks: IExperience[] = [
  {
    id: 1,
    svg: (
      <AiOutlineGift
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    text: "MaxPresente",
  },

  {
    id: 2,
    svg: (
      <IoMdBed
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    text: "Hotel",
  },

  {
    id: 3,
    svg: (
      <FaAddressCard
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    text: "Pacote",
  },
];

export default function MoreExperiencesSection() {
  return (
    <SectionContainer>
      <Title>Mais experiência para você</Title>
      <ExperiencesContainer>
        {mocks.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </ExperiencesContainer>
    </SectionContainer>
  );
}

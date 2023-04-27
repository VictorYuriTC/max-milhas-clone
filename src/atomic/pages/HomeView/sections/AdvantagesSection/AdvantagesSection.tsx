import AdvantageCard, {
  IAdvantage,
} from "./components/AdvantageCard/AdvantageCard";
import { CardsContainer, PreTitle, SectionContainer, Title } from "./styles";
import { RiUserSearchLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { GiChart } from "react-icons/gi";

const mocks: IAdvantage[] = [
  {
    id: 1,
    title: "Pesquisa fácil",
    description:
      "Você diz para onde quer ir, informa a data da viagem e ainda pode filtrar suas preferências de voos e hotéis.",
    svg: <RiUserSearchLine style={{ width: "100%", height: "100%" }} />,
  },

  {
    id: 2,
    title: "Mais inteligência",
    description:
      "Com soluções inteligentes e personalizadas, combinamos voos com os melhores preços e possibilitamos descontos extras em hotéis.",
    svg: <BiWorld style={{ width: "100%", height: "100%" }} />,
  },

  {
    id: 3,
    title: "Comparação e compra",
    description:
      "Compare tarifas de voos e quartos de hotéis de maneira prática, escolha a melhor opção e compre sem precisar ter milhas.",
    svg: <GiChart style={{ width: "100%", height: "100%" }} />,
  },
];

export default function AdvantagesSection() {
  return (
    <SectionContainer>
      <PreTitle>Vantagens</PreTitle>

      <Title>Sabe por que a Maxmilhas é o máximo?</Title>

      <CardsContainer>
        {mocks.map((advantage) => (
          <AdvantageCard key={advantage.id} advantage={advantage} />
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}

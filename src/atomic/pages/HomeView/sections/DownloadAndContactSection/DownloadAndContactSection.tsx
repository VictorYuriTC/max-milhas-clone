import DownloadAndContactCard, {
  IDownloadAndContact,
} from "./components/DownloadAndContactCard/DownloadAndContactCard";
import FormContainer from "./components/FormContainer/FormContainer";
import LinksContainer from "./components/LinksContainer/LinksContainer";
import { SectionContainer } from "./styles";

const mocks: IDownloadAndContact[] = [
  {
    id: 1,
    title: "Já baixou o nosso app?",
    description:
      "Receba ofertas do seu jeito e descontos exclusivos para você viver viajando.",
    linksContainer: <LinksContainer />,
  },

  {
    id: 2,
    title: "Quem deixa o e-mail viaja ao máximo",
    description:
      "Aproveite nossas promoções e dicas para curtir mais experiências de viagem!",
    formContainer: <FormContainer />,
  },
];

export default function DownloadAndContactSection() {
  return (
    <SectionContainer>
      {mocks.map((card) => (
        <DownloadAndContactCard key={card.id} cardData={card} />
      ))}
    </SectionContainer>
  );
}

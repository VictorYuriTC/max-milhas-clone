import DefaultHomeSection from "../../components/DefaultHomeSection/DefaultHomeSection";
import { BsTicketPerforated } from "react-icons/bs";
import { RiSwitchLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { IDefaultHomeSectionCard } from "../../components/DefaultHomeSection/components/DefaultHomeCard/DefaultHomeCard";

const mocks: IDefaultHomeSectionCard[] = [
  {
    id: 1,
    title: "Precisa remarcar ou cancelar a viagem?",
    description:
      "Confira as regras da companhia para o seu voo e faça sua solicitação online.",
    svg: <RiSwitchLine style={{ width: "100%", height: "100%" }} />,
    linkText: "Conferir regras da tarifa",
    linkHref: "https://www.maxmilhas.com.br/cliente/minhas-viagens-light",
  },

  {
    id: 2,
    title: "Dúvidas sobre créditos e reembolso?",
    description:
      "Consulte a devolução de reembolsos e créditos de passagens canceladas.",
    svg: <BsTicketPerforated style={{ width: "100%", height: "100%" }} />,
    linkText: "Consultar reembolso",
    linkHref:
      "https://www.maxmilhas.com.br/cliente/minhas-viagens-light/reembolsos",
  },

  {
    id: 3,
    title: "Quer consultar sua reserva de hotel?",
    description:
      "Acompanhe todos os detalhes da sua reserva de hotel, pousada ou resort.",
    svg: <CiWallet style={{ width: "100%", height: "100%" }} />,
    linkText: "Consultar reservas",
    linkHref: "https://www.maxmilhas.com.br/hoteis/minhas-reservas",
  },
];

export default function QuestionsSection() {
  return (
    <DefaultHomeSection
      preTitle="Dúvidas sobre a sua viagem?"
      title="Estamos aqui para te ajudar"
      arrayWithCards={mocks}
    />
  );
}

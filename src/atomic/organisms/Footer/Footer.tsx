import CompanyDetailsAndDownload from "./components/CompanyDetailsAndDownload/CompanyDetailsAndDownload";
import FooterNav from "./components/FooterNav/FooterNav";
import {
  HorizontalRule,
  IOrganismContainer,
  OrganismContainer,
} from "./styles";

interface IProps {
  organismContainer?: IOrganismContainer;
}

export default function Footer(props: IProps) {
  return (
    <OrganismContainer
      paddingX={props.organismContainer?.paddingX}
      paddingY={props.organismContainer?.paddingY}>
      <HorizontalRule />

      <FooterNav />

      <HorizontalRule />

      <CompanyDetailsAndDownload />
    </OrganismContainer>
  );
}

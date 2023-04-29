import Image from "next/image";
import HeaderLink from "./components/HeaderLink/HeaderLink";
import LogoImg from "../../../../public/images/max-milhas-logo.png";
import {
  OrganismContainer,
  LinksContainer,
  LogoContainer,
  IOrganismContainer,
} from "./styles";
import Link from "next/link";
import UserMenuElement from "./components/UserMenuElement/UserMenuElement";

interface IProps {
  organismContainer?: IOrganismContainer;
}

export default function Header(props: IProps) {
  return (
    <OrganismContainer
      paddingX={props.organismContainer?.paddingX}
      paddingY={props.organismContainer?.paddingY}>
      <LinksContainer>
        <Link href="/">
          <LogoContainer>
            <Image
              alt="Max Milhas logo"
              src={LogoImg}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </LogoContainer>
        </Link>

        <HeaderLink href="/passagens-aereas">Passagens aéreas</HeaderLink>

        <HeaderLink href="/hotel">Hotéis</HeaderLink>

        <HeaderLink href="/pacotes">Pacotes</HeaderLink>

        <HeaderLink href="/vender-milhas">Vender milhas</HeaderLink>

        <HeaderLink href="/cartao-presente">Cartão presente</HeaderLink>
      </LinksContainer>

      <LinksContainer>
        <HeaderLink href="/ajuda">Ajuda</HeaderLink>
        <HeaderLink href="/reservas">Voos e reservas</HeaderLink>

        <section>
          <UserMenuElement />
        </section>
      </LinksContainer>
    </OrganismContainer>
  );
}

import Image from "next/image";
import HeaderLink from "./components/HeaderLink/HeaderLink";
import LogoImg from "../../../../public/images/max-milhas-logo.png";
import { ComponentContainer, LinksContainer, LogoContainer } from "./styles";
import Link from "next/link";
import UserMenuElement from "./components/UserMenuElement/UserMenuElement";

export default function Header() {
  return (
    <ComponentContainer className="">
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
    </ComponentContainer>
  );
}

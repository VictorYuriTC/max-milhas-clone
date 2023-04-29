import Link from "next/link";
import {
  ColumnContainer,
  ColumnLink,
  ColumnLinkSvgContainer,
  ColumnLinksContainer,
  ColumnSubTitle,
  ColumnTitle,
  ComponentContainer,
  PaymentLinkSvgContainer,
  PaymentLinksContainer,
} from "./styles";

import visaSvg from "../../../../../../public/images/visa.svg";
import masterCardSvg from "../../../../../../public/images/master-card.svg";
import americanExpressSvg from "../../../../../../public/images/visa.svg";
import digitalDubSvg from "../../../../../../public/images/visa.svg";
import auraSvg from "../../../../../../public/images/aura.svg";
import eloSvg from "../../../../../../public/images/elo.svg";
import hipercardSvg from "../../../../../../public/images/hipercard.svg";

import caixaSvg from "../../../../../../public/images/caixa.svg";
import itauSvg from "../../../../../../public/images/itau.svg";
import bancoDoBrasilSvg from "../../../../../../public/images/banco-do-brasil.svg";
import bradescoSvg from "../../../../../../public/images/bradesco.svg";
import santanderSvg from "../../../../../../public/images/santander.svg";

import pixSvg from "../../../../../../public/images/pix.svg";

import facebookSvg from "../../../../../../public/images/facebook.svg";
import instagramSvg from "../../../../../../public/images/instagram.svg";
import twitterSvg from "../../../../../../public/images/twitter.svg";
import linkedinSvg from "../../../../../../public/images/linkedin.svg";
import youtubeSvg from "../../../../../../public/images/youtube.svg";
import Image from "next/image";

interface IColumnLink {
  id: number;
  href: string;
  text: string;
  svg?: any;
}

interface IPaymentLink {
  id: number;
  svg: any;
}

const allMaxMilhasLinks: IColumnLink[] = [
  { id: 1, href: "/", text: "Sobre nós" },

  { id: 2, href: "/", text: "Blog" },

  { id: 3, href: "/", text: "Imprensa" },

  { id: 4, href: "/", text: "Trabalhe conosco" },

  { id: 5, href: "/", text: "Termos e condições" },

  { id: 6, href: "/", text: "Política de privacidade" },
];

const allTwentyFourCustomerServiceLinks: IColumnLink[] = [
  { id: 1, href: "/", text: "Dúvidas frequentes" },

  { id: 2, href: "/", text: "Remarcações/Cancelamentos" },

  { id: 3, href: "/", text: "Fale conosco" },
];

const allCreditCardsSvgs: IPaymentLink[] = [
  {
    id: 1,
    svg: visaSvg,
  },

  {
    id: 2,
    svg: masterCardSvg,
  },

  {
    id: 3,
    svg: americanExpressSvg,
  },

  {
    id: 4,
    svg: digitalDubSvg,
  },

  {
    id: 5,
    svg: auraSvg,
  },

  {
    id: 6,
    svg: eloSvg,
  },

  {
    id: 7,
    svg: hipercardSvg,
  },
];

const allAccountTransferLinks: IPaymentLink[] = [
  {
    id: 1,
    svg: caixaSvg,
  },

  {
    id: 2,
    svg: itauSvg,
  },

  {
    id: 3,
    svg: bancoDoBrasilSvg,
  },

  {
    id: 4,
    svg: santanderSvg,
  },

  {
    id: 5,
    svg: bradescoSvg,
  },
];

const allSocialMediasLinks: IColumnLink[] = [
  {
    id: 1,
    href: "https://www.facebook.com/MaxMilhas",
    text: "Facebook",
    svg: facebookSvg,
  },

  {
    id: 2,
    href: "https://www.instagram.com/maxmilhas/",
    text: "Instagram",
    svg: instagramSvg,
  },

  {
    id: 3,
    href: "https://twitter.com/maxmilhas",
    text: "Twitter",
    svg: twitterSvg,
  },

  {
    id: 4,
    href: "https://www.linkedin.com/company/max-milhas/",
    text: "LinkedIn",
    svg: linkedinSvg,
  },

  {
    id: 5,
    href: "https://www.youtube.com/user/canalmaxmilhas",
    text: "YouTube",
    svg: youtubeSvg,
  },
];

export default function FooterNav() {
  return (
    <ComponentContainer>
      <ColumnContainer>
        <ColumnTitle>A Maxmilhas</ColumnTitle>

        <ColumnLinksContainer>
          {allMaxMilhasLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <ColumnLink>{link.text}</ColumnLink>
            </Link>
          ))}
        </ColumnLinksContainer>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnTitle>Atendimento 24h</ColumnTitle>

        <ColumnLinksContainer>
          {allTwentyFourCustomerServiceLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <ColumnLink>{link.text}</ColumnLink>
            </Link>
          ))}
        </ColumnLinksContainer>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnTitle>Formas de pagamento</ColumnTitle>

        <ColumnLinksContainer>
          <ColumnSubTitle>Cartões de crédito</ColumnSubTitle>
          <PaymentLinksContainer>
            {allCreditCardsSvgs.map((card) => (
              <PaymentLinkSvgContainer key={card.id}>
                <Image src={card.svg} alt="SVG" />
              </PaymentLinkSvgContainer>
            ))}
          </PaymentLinksContainer>
        </ColumnLinksContainer>

        <ColumnLinksContainer>
          <ColumnSubTitle>Transferência em conta</ColumnSubTitle>
          <PaymentLinksContainer>
            {allAccountTransferLinks.map((card) => (
              <PaymentLinkSvgContainer key={card.id}>
                <Image src={card.svg} alt="SVG" />
              </PaymentLinkSvgContainer>
            ))}
          </PaymentLinksContainer>
        </ColumnLinksContainer>

        <ColumnLinksContainer>
          <ColumnSubTitle>Transferência via PIX</ColumnSubTitle>
          <PaymentLinksContainer>
            <PaymentLinkSvgContainer>
              <Image src={pixSvg} alt="SVG" />
            </PaymentLinkSvgContainer>
          </PaymentLinksContainer>
        </ColumnLinksContainer>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnTitle>Redes sociais</ColumnTitle>
        <ColumnLinksContainer>
          {allSocialMediasLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <ColumnLink>
                <ColumnLinkSvgContainer>
                  <Image src={link.svg} alt="SVG" />
                </ColumnLinkSvgContainer>

                {link.text}
              </ColumnLink>
            </Link>
          ))}
        </ColumnLinksContainer>
      </ColumnContainer>
    </ComponentContainer>
  );
}

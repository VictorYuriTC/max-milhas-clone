import Link from "next/link";
import DownloadLink, { IDownloadLink } from "../DownloadLink/DownloadLink";
import { ComponentContainer } from "./styles";
import { BsGooglePlay, BsApple } from "react-icons/bs";

const allDownloadLinks: IDownloadLink[] = [
  {
    id: 1,
    svg: (
      <BsGooglePlay
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    text: "Google Play",
    href: "https://play.google.com/store/apps/details?id=br.com.maxmilhas",
  },

  {
    id: 2,
    svg: (
      <BsApple
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
    text: "Apple Store",
    href: "https://apps.apple.com/br/app/maxmilhas-comprar-voo-e-viajar/id1117404560",
  },
];

export default function LinksContainer() {
  return (
    <ComponentContainer className="">
      {allDownloadLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <DownloadLink downloadLink={link} />
        </Link>
      ))}
    </ComponentContainer>
  );
}

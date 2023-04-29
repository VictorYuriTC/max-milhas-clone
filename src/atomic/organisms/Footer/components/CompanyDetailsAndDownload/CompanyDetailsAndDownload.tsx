import {
  DownloadAppText,
  HeadquartersContainer,
  CompanyDetailsText,
  LeftSideContainer,
  ComponentContainer,
  RightSideContainer,
  SealOfQualityContainer,
} from "./styles";

import ReclameAquiSealImg from "../../../../../../public/images/reclame-aqui-seal.svg";
import CyberSecuritySealImg from "../../../../../../public/images/cyber-security-seal.png";

import Image from "next/image";

export default function CompanyDetailsAndDownload() {
  return (
    <ComponentContainer>
      <LeftSideContainer>
        <HeadquartersContainer>
          <CompanyDetailsText>
            © 2012 - 2023 Maxmilhas - MM Turismo & Viagens S.A | CNPJ:
            16.988.607/0001-61
          </CompanyDetailsText>
          <CompanyDetailsText>
            Rua Matias Cardoso, 169, 11º andar - Santo Agostinho, Belo Horizonte
            - MG, 30170-050
          </CompanyDetailsText>
        </HeadquartersContainer>
        <SealOfQualityContainer>
          <Image
            src={CyberSecuritySealImg}
            alt="Selo de qualidade de segurança"
          />

          <Image
            src={ReclameAquiSealImg}
            alt="Selo de qualidade Reclame Aqui"
          />
        </SealOfQualityContainer>
      </LeftSideContainer>

      <RightSideContainer>
        <DownloadAppText>Baixe o app Maxmilhas</DownloadAppText>
      </RightSideContainer>
    </ComponentContainer>
  );
}

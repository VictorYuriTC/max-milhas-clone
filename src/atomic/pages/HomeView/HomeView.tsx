import AdvantagesSection from "./sections/AdvantagesSection/AdvantagesSection";
import DestinationsSection from "./sections/DestinationsSection/DestinationsSection";
import { PageContainer } from "./styles";

export default function HomeView() {
  return (
    <PageContainer>
      <DestinationsSection />

      <AdvantagesSection />
    </PageContainer>
  );
}

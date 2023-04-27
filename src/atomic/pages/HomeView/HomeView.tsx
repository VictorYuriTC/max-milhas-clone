import AdvantagesSection from "./sections/AdvantagesSection/AdvantagesSection";
import DestinationsSection from "./sections/DestinationsSection/DestinationsSection";
import MoreExperiencesSection from "./sections/MoreExperiencesSection/MoreExperiencesSection";
import { PageContainer } from "./styles";

export default function HomeView() {
  return (
    <PageContainer>
      <DestinationsSection />

      <MoreExperiencesSection />

      <AdvantagesSection />
    </PageContainer>
  );
}

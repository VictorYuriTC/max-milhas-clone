import AdvantagesSection from "./sections/AdvantagesSection/AdvantagesSection";
import DestinationsSection from "./sections/DestinationsSection/DestinationsSection";
import DownloadAndContactSection from "./sections/DownloadAndContactSection/DownloadAndContactSection";
import LandingSection from "./sections/LandingSection/LandingSection";
import MoreExperiencesSection from "./sections/MoreExperiencesSection/MoreExperiencesSection";
import QuestionsSection from "./sections/QuestionSection/QuestionsSection";
import SearchDestinationSection from "./sections/SearchDestinationSection/SearchDestinationSection";
import { PageContainer } from "./styles";

export default function HomeView() {
  return (
    <PageContainer>
      <LandingSection />

      <SearchDestinationSection />

      <DestinationsSection />

      <QuestionsSection />

      <MoreExperiencesSection />

      <AdvantagesSection />

      <DownloadAndContactSection />
    </PageContainer>
  );
}

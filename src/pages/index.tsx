import Footer from "@/atomic/organisms/Footer/Footer";
import Header from "@/atomic/organisms/Header/Header";
import HomeView from "@/atomic/pages/HomeView/HomeView";
import {
  SectionPaddingX,
  SectionPaddingY,
} from "@/atomic/pages/HomeView/styles";

export default function Home() {
  return (
    <>
      <Header
        organismContainer={{
          paddingX: SectionPaddingX,
          paddingY: SectionPaddingY,
        }}
      />
      <HomeView />
      <Footer
        organismContainer={{
          paddingX: SectionPaddingX,
          paddingY: SectionPaddingY,
        }}
      />
    </>
  );
}

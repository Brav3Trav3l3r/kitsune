import AnimeTabs from "./_components/anime-tabs";
import Banner from "./_components/banner";
import Container from "./_components/container";
import Continue from "./_components/continue";
import { ThemeToggle } from "./_components/theme-toggle";

export default async function Home() {
  return (
    <Container>
      <div className="flex gap-6 mt-10">
        <div className="flex-1">
          <Banner />
          <Continue />
          <AnimeTabs />
        </div>
        <div className="basis-1/3 border"></div>
      </div>
    </Container>
  );
}

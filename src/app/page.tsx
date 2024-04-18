import { MountainSnow } from "lucide-react";
import AnimeTabs from "./_components/anime-tabs";
import Announcement from "./_components/announcement";
import Banner from "./_components/banner";
import Container from "./_components/container";
import Continue from "./_components/continue";
import MostWatched from "./_components/most-watched";
import { PRIMARY_COLOR } from "./_lib/contants";
import { IoLogoDiscord } from "react-icons/io5";

export default async function Home() {
  return (
    <Container>
      <div className="flex gap-10 mt-10">
        <div className="flex-1">
          <Banner />
          {/* <Continue /> */}
          <AnimeTabs />
        </div>
        <div className="basis-1/4 flex flex-col gap-8">
          <Announcement />
          <div className="flex gap-4 justify-center items-center cursor-pointer px-4 py-2 border rounded-md border-[#5865F2] bg-[#5865F2]/20">
            <IoLogoDiscord size={20} color="#5865F2" />
            <p className="text-[#5865F2] font-medium">Join our community</p>
          </div>
          <MostWatched />
        </div>
      </div>
    </Container>
  );
}

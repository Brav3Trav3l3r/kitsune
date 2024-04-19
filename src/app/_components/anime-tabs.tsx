import PopularAnime from "./popular-anime";
import RecentAnime from "./recent-anime";
import TrendingAnime from "./trending-anime";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function AnimeTabs() {
  return (
    <div className="">
      <Tabs defaultValue="trending" className="">
        <TabsList className="border-b-2 w-full">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="">
          <TrendingAnime />
        </TabsContent>
        <TabsContent value="popular">
          <PopularAnime />
        </TabsContent>
        <TabsContent value="recent">
          <RecentAnime />
        </TabsContent>
      </Tabs>
    </div>
  );
}

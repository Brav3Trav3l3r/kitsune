import AnimeResults from "./anime-results";
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
          <AnimeResults url="trending" />
        </TabsContent>
        <TabsContent value="popular">
          <AnimeResults url="popular" />
        </TabsContent>
        <TabsContent value="recent">
          <AnimeResults url="recent-episodes" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

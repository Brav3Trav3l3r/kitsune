import Container from "../_components/container";
import { Skeleton } from "../_components/ui/skeleton";
import AnimeCardSkeleton from "../_components/ui/skeleton/anime-card-skeleton";

export default function loading() {
  return (
    <div className="mt-6">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:basis-1/4">
            <div className="flex lg:flex-col gap-3 lg:gap-6">
              <Skeleton className="h-10 flex-1 lg:flex-auto" />
              <Skeleton className="h-10 flex-1 lg:flex-auto" />
              <Skeleton className="h-10 flex-1 lg:flex-auto" />
            </div>

            <Skeleton className="mt-6 h-48 lg:h-72 border-red-500" />
          </div>
          <div className="flex-1">
            <div className="flex gap-4">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-[100px]" />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 gap-y-8">
              {[...Array(10)].map((e, i) => (
                <AnimeCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

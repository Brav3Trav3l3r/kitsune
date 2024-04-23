import Container from "../../_components/container";
import { Skeleton } from "../../_components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row mt-4 gap-4 lg:gap-6 lg:mt-8">
          <div className="flex-1">
            <div className="aspect-video">
              <Skeleton className="h-full w-full" />
            </div>

            <div className="mt-6">
              <Skeleton className="w-[80%] h-8" />
              <Skeleton className="w-[40%] h-32 lg:h-48 mt-4" />
            </div>
          </div>
          <div className="lg:basis-1/4 rounded h-28 lg:h-[500px]">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
}

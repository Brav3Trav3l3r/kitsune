import Container from "../_components/container";
import { Skeleton } from "../_components/ui/skeleton";

export default function loading() {
  return (
    <div className="">
      <Container>
        <div className="flex gap-4 mt-8">
          <Skeleton className="h-8 w-[100px]" />
          <Skeleton className="h-8 w-[100px]" />
          <Skeleton className="h-8 w-[100px]" />
        </div>
      </Container>
    </div>
  );
}

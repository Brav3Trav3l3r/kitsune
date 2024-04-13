import Container from "../_components/container";
import { Skeleton } from "../_components/ui/skeleton";

export default function Loding() {
  return (
    <div>
      <Container>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </Container>
    </div>
  );
}

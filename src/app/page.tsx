import Todos from "./_components/Todos";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-primary">Hello</p>
      <Button>Hello</Button>
      <Todos />
    </>
  );
}

import AddTodo from "./_components/AddTodo";
import Todos from "./_components/Todos";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <AddTodo />
      <Todos />
    </div>
  );
}

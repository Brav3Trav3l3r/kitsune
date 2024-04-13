import { serverCaller } from "@/server/routers/_app";
import AddTodo from "./_components/AddTodo";
import Todos from "./_components/Todos";
import { Button } from "./_components/ui/button";

export default async function Home() {
  const todos = await serverCaller.todos.getAll();

  return (
    <div className="p-4 flex flex-col gap-6">
      <AddTodo />
      <Todos initialTodos={todos} />
    </div>
  );
}

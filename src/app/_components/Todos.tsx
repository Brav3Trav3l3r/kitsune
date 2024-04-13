"use client";

import { serverCaller } from "@/server/routers/_app";
import { trpc } from "../_trpc/client";

export default function Todos({
  initialTodos,
}: {
  initialTodos: Awaited<ReturnType<(typeof serverCaller)["todos"]["getAll"]>>;
}) {
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = trpc.todos.getAll.useQuery(undefined, {
    initialData: initialTodos,
  });

  return (
    <div>
      <p>Todos</p>

      {isLoading ? (
        <p>Loading..</p>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id} className="">
            {todo.text}
          </div>
        ))
      )}
    </div>
  );
}

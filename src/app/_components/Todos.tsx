"use client";

import { trpc } from "../_trpc/client";

export default function Todos() {
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = trpc.todos.getAll.useQuery();

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

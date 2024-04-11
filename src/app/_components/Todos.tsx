"use client";

import { trpc } from "../_trpc/client";

export default function Todos() {
  const message = trpc.hi.useQuery();
  console.log(message.data);

  return (
    <div>
      <p>Todos</p>
      <p>{message.data}</p>
    </div>
  );
}

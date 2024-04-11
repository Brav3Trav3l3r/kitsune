"use client";
import { useState } from "react";
import { trpc } from "../_trpc/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AddTodo() {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const utils = trpc.useUtils();
  const mutation = trpc.todos.add.useMutation({
    onSuccess() {
      utils.todos.getAll.invalidate();
    },
  });

  const addTodo = async () => {
    mutation.mutate({ id: id, text: text });
  };

  return (
    <div>
      <p>Add Todo</p>
      <div className="max-w-96 flex gap-4">
        <Input
          placeholder="id"
          value={id}
          onChange={(e) => setId(+e.target.value)}
        />
        <Input
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button onClick={addTodo}>Add todo</Button>
      </div>
    </div>
  );
}

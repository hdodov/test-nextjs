"use client";

import { useActionState } from "react";
import { serverAction } from "./actions";

export default function Home() {
  const [data, action, isPending] = useActionState(serverAction, null);
  const isSuccess = data === "hello";
  const isError = data === undefined;

  let color = "bg-gray-800";
  let text = "Submit";
  if (isPending) {
    color = "bg-blue-500";
    text = "Loading...";
  } else if (isSuccess) {
    color = "bg-green-500";
    text = "Success!";
  } else if (isError) {
    color = "bg-red-500";
    text = "Error!";
  }

  return (
    <form className="flex items-center justify-center py-12" action={action}>
      <button
        className={`w-[300px] px-8 py-6 text-white text-3xl ${color}`}
        disabled={isPending}
      >
        {text}
      </button>
    </form>
  );
}

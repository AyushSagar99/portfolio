import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-10 w-28 items-center justify-center rounded-md bg-zinc-900 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-current" />
      ) : (
        "Submit"
      )}
    </button>
  );
}

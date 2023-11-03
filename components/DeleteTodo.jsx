"use client";

import { useRouter } from "next/navigation";

async function DeleteTodo({ id }) {
  const router = useRouter();
  // const dummyWait = await new Promise((resolve, reject) => setTimeout(resolve, 200))

  async function handleDelete() {
    const response = await fetch(`http://localhost:3000/api/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    if (response.ok) {
      router.refresh();
      // router.push('/')
    } else {
      throw new Error("Something went wrong");
    }
  }

  return <button className=" hover:bg-red-600 bg-white  px-6 py-2 hover:text-white text-red-600 transition-all duration-300 font-semibold " onClick={handleDelete}>Delete</button>;
}

export default DeleteTodo;

"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export  async function action(id,body) {
    await fetch(`https://6aa3eac6e7ae868cdf7b6bf5.mockapi.io/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify({ body }),
    headers: { "Content-Type": "application/json" },
  });

   revalidatePath(`/posts/${id}`);
  revalidatePath("/");        
  redirect(`/posts/${id}`);
}


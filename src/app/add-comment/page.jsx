import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment() {
  async function handleAddComment(formData) {
    "use server";

    const name = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO foods (username, content) values (${username}, ${content})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-comment-container">
      <h2>Add Comment!</h2>
      <form action={handleAddComment}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" placeholder="Username" />
        <label htmlFor="content">Description</label>
        <input name="content" id="content" placeholder="Content" />

        <button type="submit">Add a Comment!</button>
      </form>
    </div>
  );
}

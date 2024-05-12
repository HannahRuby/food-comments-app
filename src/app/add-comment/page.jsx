import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment() {
  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO comments (username, content) values (${username}, ${content})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-comment-container bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Comment!</h2>
      <form onSubmit={handleAddComment} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Content"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add a Comment!
        </button>
      </form>
    </div>
  );
}

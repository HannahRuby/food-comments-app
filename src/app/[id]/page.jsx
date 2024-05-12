import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Food({ params }) {
  const result = await sql`SELECT * FROM foods WHERE id = ${params.id}`;
  const food = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  async function editFood(formData) {
    "use server";
    const username = formData.get("username");
    const content = formData.get("content");

    await sql`UPDATE foods SET username=${username}, content=${content} WHERE id = ${params.id}`;

    revalidatePath("/foods");
    revalidatePath(`/foods/${params.id}`);

    redirect(`/foods/${params.id}`);
  }

  return (
    <div>
      <form action={editFood}>
        <label>Name</label>
        <input name="name" placeholder="Food Name" defaultValue={food.name} />

        <label>Content</label>
        <textarea
          name="content"
          placeholder="Content"
          defaultValue={food.content}
          rows={5}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddFood() {
  async function handleAddFood(formData) {
    "use server";

    const name = formData.get("name");
    const content = formData.get("content");

    await sql`INSERT INTO foods (name, content) values (${name}, ${content})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-food-container">
      <h2>Add Food!</h2>
      <form action={handleAddFood}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" placeholder="Name" />
        <label htmlFor="content">Description</label>
        <input name="content" id="content" placeholder="Content" />

        <button type="submit">Add a Food!</button>
      </form>
    </div>
  );
}

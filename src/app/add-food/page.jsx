import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddFood() {
  async function handleAddFood(formData) {
    "use server";

    const name = formData.get("name");
    const content = formData.get("content");

    await sql`INSERT INTO foods (name, content) values (${name}, ${content})`;

    revalidatePath("/foods");

    redirect("/foods");
  }

  return (
    <div className="add-food-container bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Food</h2>
      <form onSubmit={handleAddFood} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
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
          Add Food
        </button>
      </form>
    </div>
  );
}

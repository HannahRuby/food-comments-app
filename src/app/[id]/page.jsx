import { sql } from "@vercel/postgres";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const food = await fetchFood(params.id);

  if (!food) {
    return {
      title: "Food Not Found",
      description: "Sorry, the requested food item was not found.",
    };
  }

  return {
    title: `Hannah's Food: ${food.name}`,
    description: `This is a post about ${food.content}`,
  };
}

async function fetchFood(id) {
  // Ensure that the id parameter is a valid integer
  const foodId = parseInt(id);

  // Check if the parsed ID is a valid integer
  if (isNaN(foodId)) {
    return null; // Return null if the ID is not a valid integer
  }

  try {
    // Execute the SQL query with the parsed ID
    const result = await sql`SELECT * FROM foods WHERE id = ${foodId}`;
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching food:", error);
    return null; // Return null if an error occurs during the query execution
  }
}

export default function Food({ food }) {
  if (!food) {
    return <div>No food found</div>;
  }

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>{food.name}</h2>
      <p className={styles.postContent}>{food.content}</p>
      <Image
        src={`/images/${food.id}.png`} // Assuming images are stored in /images directory
        alt={food.name}
        width={300}
        height={300}
        className={styles.postImage}
      />
    </div>
  );
}

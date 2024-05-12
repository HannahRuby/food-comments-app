import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import styles from "./globals.css";

export default function Foods({ searchParams }) {
  // Fetch foods from the database
  async function fetchFoods() {
    const result = await sql`SELECT * FROM foods`;
    return result.rows;
  }

  // Sort foods based on searchParams
  async function getFoods() {
    const foods = await fetchFoods();
    if (searchParams.sort === "desc") {
      return foods.reverse(); // Return the reversed array
    }
    return foods; // Return the original array
  }

  // Ensure that getFoods() always returns an array
  const foods = Array.isArray(getFoods()) ? getFoods() : [];

  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <Link href="/foods">Sort Ascending</Link>
        <Link href="/foods?sort=desc">Sort Descending</Link>
      </div>
      <marquee>View all foods</marquee>
      {foods.map((food) => (
        <Link href={`/foods/${food.id}`} key={food.id} className={styles.post}>
          <div key={food.id}>
            <h3 className={styles.postTitle}>{food.name}</h3>
            <p className={styles.postContent}>{food.content}</p>
            <Image
              src={`/images/${food.id}.png`} // Assuming images are stored in /images directory
              alt={food.name}
              width={300}
              height={300}
              className={styles.postImage}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

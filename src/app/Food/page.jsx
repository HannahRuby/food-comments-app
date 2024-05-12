// import Image from "next/image";
import { useClient } from "next/navigation";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import styles from "./globals.css";

export default async function foods() {
  // Fetching data from the database
  const result = await sql`SELECT * FROM foods`;
  const foods = result.rows; // Assuming the result is an object with a rows property containing the array of foods

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
            {/* <Image
              src={`/public/${food.id}.png`} // Assuming images are stored in /images directory
              alt={food.name}
              width={300}
              height={300}
              className={styles.postImage}
            /> */}
          </div>
        </Link>
      ))}
    </div>
  );
}

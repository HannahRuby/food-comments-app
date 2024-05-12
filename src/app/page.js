import Link from "next/link";
import { sql } from "@vercel/postgres";
// import styles from "./page.module.css";
// import Image from "next/image";

export default async function foods() {
  // Fetching data from the database
  const result = await sql`SELECT * FROM foods`;
  const foods = result.rows; // Assuming the result is an object with a rows property containing the array of foods

  return (
    <div className="container mx-auto">
      <marquee className="block my-4 text-center">View all foods</marquee>
      {foods.map((food) => (
        <Link href={`/foods/${food.id}`} key={food.id} className="block my-4">
          <div key={food.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold">{food.name}</h3>
            <p className="mt-2">{food.content}</p>
            {/* <Image
              src={`/public/${food.id}.jpg`} // Assuming images are stored in /images directory
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

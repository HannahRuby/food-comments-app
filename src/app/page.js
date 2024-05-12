import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Foods(searchParams) {
  const foods = await sql`SELECT * FROM foods`;

  console.log(foods);

  if (searchParams.sort === "desc") {
    foods.reverse();
  }

  return (
    <div className="home-container">
      <div>
        <Link href="/foods">Sort Ascending</Link>
        <Link href="/foods?sort=desc">Sort Ascending</Link>
      </div>
      <marquee>View all foods</marquee>
      {foods.rows.map((food) => {
        return (
          <Link href={`/foods/${food.id}`} key={food.id}>
            Read more...
            <div key={food.id}>
              <h3>{food.name}</h3>
              <p>{food.content}</p>
              <Image
                src={`/${food.name}.png`}
                alt={food.name}
                width={300}
                height={300}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

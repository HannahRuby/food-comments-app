export async function generateMetadata({ params }) {
  const result = await sql`SELECT * FROM foods WHERE food.id = ${params.id}`;
  // WE FETCH THE DATA FOR THE SPECIFIC POST

  const food = result.rows[0];

  return {
    title: `Hannah's Food: ${food.name}`,
    description: `This is a post about ${food.content}`,
    //WE DYNAMICALLY ADD THE TITLE AND DESCRIPTION FOR THE SPECIFIC POST TO THE PAGES METADATA
  };
}

export default async function Page({ params }) {
  const result = await sql`SELECT * FROM foods WHERE food.id = ${params.id}`;

  const food = result.rows[0];

  return (
    <div>
      <p>{food.id}</p>
      <h2>{food.name}</h2>
      <p>{fodd.content}</p>
    </div>
    // WE THEN RENDER ALL OF THE INDIVIDUAL POST DATA TO THE PAGE
  );
}

import Link from "next/link";

export default async function Home() {
  return (
    <div className="home-container">
      <main>
        <marquee>Foods from around the world</marquee>
        <Link href="/food"></Link>
      </main>
    </div>
  );
}

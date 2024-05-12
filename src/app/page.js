import Link from "next/link";

export default function About() {
  return (
    <div>
      <marquee>Welcome to the food Market</marquee>
      <Link
        href="/foods"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-gray-100"
      >
        View all Foods
      </Link>
    </div>
  );
}

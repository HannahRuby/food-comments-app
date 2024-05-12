import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Post App",
  description: "The ultimate Food site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white py-4">
          <nav className="container mx-auto">
            <ul className="flex items-center justify-between">
              <li className="mr-6">
                <Link href="/" className="text-blue-300 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-300 hover:text-blue-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-blue-300 hover:text-blue-400"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <main>
          <nav className="flex justify-center mt-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/add-food"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-gray-100"
                >
                  Add Food
                </Link>
              </li>
              <li>
                <Link
                  href="/add-comment"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600 hover:text-gray-100"
                >
                  Add Comment
                </Link>
              </li>
            </ul>
          </nav>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">
            &copy; 2024 Created by Hannah Manieson. All rights reserved.
          </p>
          <nav className="mt-2">
            <Link
              href="https://github.com/HannahRuby"
              className="text-blue-300 mr-4 hover:text-blue-400"
            >
              GITHUB
            </Link>
            <Link
              href="https://www.linkedin.com/in/hannah-manieson-01097615b"
              className="text-blue-300 hover:text-blue-400"
            >
              LINKEDIN
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}

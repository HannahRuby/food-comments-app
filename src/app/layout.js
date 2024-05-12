import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Post App",
  description: "The ultimate Food site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </ul>
          </nav>
        </header>
        {children}
        <main>
          <nav>
            <ul>
              <Link href="/foods">
                <li>Foods</li>
              </Link>
              <Link href="/add-food">Add Food</Link>
            </ul>
          </nav>
        </main>
        <footer>
          Created by Hannah Manieson &copy; 2024. All rights reserved
          <nav>
            <Link href="https://github.com/HannahRuby">GITHUB</Link>
            <Link href="https://www.linkedin.com/in/hannah-manieson-01097615b">
              LINKEDIN
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}

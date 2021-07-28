import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import styles from "./layout.module.css";

export default function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`flex justify-between items-center p-6 px-12 lg:px-16 w-full z-10 text-white ${
        router.pathname === "/" ? "absolute" : "bg-gray-900"
      }`}
    >
      <Link href="/">
        <a>back to home</a>
      </Link>

      <div
        className={`${styles.menu} ${
          menuActive ? styles.active : styles.inactive
        } lg:hidden`}
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      />

      <div
        className={`${
          menuActive ? styles.navigationActive : "hidden lg:flex"
        } gap-3 flex`}
      >
        <Link href="/movies/populars">
          <a className="p-2 rounded-md bg-yellow-300 transition-colors duration-150">
            top grossing
          </a>
        </Link>
        <Link href="/">
          <a className="p-2 rounded-md bg-red-600 transition-colors duration-150 uppercase">
            Join now
          </a>
        </Link>
      </div>
    </div>
  );
}

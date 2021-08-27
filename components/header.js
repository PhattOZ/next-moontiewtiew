import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`flex justify-between items-center p-2 px-12 lg:px-16 w-full z-10 text-white font-poppins font-semibold
      ${router.pathname === "/" ? "absolute" : "bg-pink-200"}`}
    >
      <Link href="/">
        <a>
          <Image src="/logo.png" width={100} height={66} />
        </a>
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
        } gap-3 flex items-center`}
      >
        <Link href="/movies/upcomings">
          <a
            className={styles.button}
            onClick={() => {
              setMenuActive(false);
            }}
          >
            Discover
          </a>
        </Link>
        <Link href="/">
          <a
            className={styles.button}
            onClick={() => {
              setMenuActive(false);
            }}
          >
            Join now
          </a>
        </Link>
      </div>
    </div>
  );
}

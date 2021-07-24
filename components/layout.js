import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex justify-between items-center p-6 px-16 absolute w-full z-10">
        <Link href="/">
          <a>back to home</a>
        </Link>

        <div id="menu"></div>

        <div className="gap-3 hidden lg:flex">
          <Link href="/">
            <a className="p-2 rounded-full bg-yellow-300 transition-colors duration-150">
              top grossing
            </a>
          </Link>
          <Link href="/">
            <a className="p-2 rounded-full bg-yellow-300 transition-colors duration-150">
              Sign up
            </a>
          </Link>
        </div>
      </div>

      <div>{children}</div>
    </>
  );
}

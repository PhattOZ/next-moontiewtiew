import Head from "next/head";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <div>{children}</div>
    </>
  );
}

import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="font-poppins flex-grow">{children}</div>
      </div>
    </>
  );
}

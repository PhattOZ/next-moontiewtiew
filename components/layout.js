import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex justify-between p-8 px-16 bg-gray-900 text-gray-300">
        <div>logo</div>
        <div>link</div>
      </div>
      <div>{children}</div>
    </>
  );
}

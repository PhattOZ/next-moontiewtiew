import SideBar from "../components/sidebar";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Content = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (!session) {
    return (
      <div className="text-center">
        <div>Sign in first</div>
        <button onClick={signIn} className="bg-blue-300 p-1 rounded-sm">
          sign in
        </button>
      </div>
    );
  }

  return (
    <div className="text-center absolute top-16 right-16">
      <Image
        src={session.user.image}
        width={100}
        height={100}
        className="rounded-full"
      />

      <div>Signed in as {session.user.name}</div>

      <button onClick={signOut} className="bg-blue-300 p-1 rounded-sm mx-1">
        Sign out
      </button>
    </div>
  );
};

export default function Profile() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex flex-col justify-center items-center relative flex-grow">
        <Content />
      </div>
    </div>
  );
}

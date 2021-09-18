import SideBar from "../components/sidebar";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/client";

const Content = () => {
  const [session, loading] = useSession();

  if (loading && !session) {
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
    <div className="text-center">
      <Image
        src={session.user.image}
        width={200}
        height={200}
        className="rounded-full"
      />

      <div>Signed in as {session.user.name}</div>
      <button onClick={signOut} className="bg-blue-300 p-1 rounded-sm">
        Sign out
      </button>
    </div>
  );
};

export default function Profile() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex justify-center items-center flex-grow">
        <Content />
      </div>
    </div>
  );
}

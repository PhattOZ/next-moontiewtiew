import SideBar from "../components/sidebar";
import { useSession, signIn, signOut } from "next-auth/client";

const Content = () => {
  const [session, loading] = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user}
        <button onClick={signOut}>sign out</button>
      </>
    );
  }

  return (
    <>
      Sign in first
      <button onClick={signIn}>sign in</button>
    </>
  );
};

export default function Profile() {
  return (
    <div className="flex items-center">
      <SideBar />

      <div className="text-center flex justify-center">
        <div className="w-2/3">
          <Content />
        </div>
      </div>
    </div>
  );
}

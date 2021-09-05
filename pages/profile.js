import SideBar from "../components/sidebar";
import { useSession, signIn, signOut } from "next-auth/client";

const Content = () => {
  const [session, loading] = useSession();

  console.log(session);

  // if (session) {
  //   return (
  //     <div>
  //       <div>Signed in as {session.user}</div>
  //       <button onClick={signOut} className="bg-blue-300">
  //         sign out
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div>Sign in first</div>
      <button onClick={signIn} className="bg-blue-300">
        sign in
      </button>
    </div>
  );
};

export default function Profile() {
  return (
    <>
      <SideBar />

      <div className="flex justify-center items-center flex-grow">
        <Content />
      </div>
    </>
  );
}

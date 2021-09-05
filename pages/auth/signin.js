import { getProviders, signIn } from "next-auth/client";

export default function SignIn({ providers }) {
  return (
    <div className="flex justify-center items-center flex-grow">
      <div>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="border-2 rounded-md text-center p-3 px-6 my-1 transform-gpu hover:-translate-y-0.5 cursor-pointer"
          >
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

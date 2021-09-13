import { getProviders, signIn } from "next-auth/client";

const logo = (name) => {
  switch (name) {
    case "GitHub":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 14222 14222"
        >
          <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
          <path
            d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
            fill="#fff"
          />
        </svg>
      );
  }
};

export default function SignIn({ providers }) {
  const callbackURL = "/movies/upcomings";

  return (
    <div className="flex justify-center items-center flex-grow">
      <div>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="flex items-center justify-center border-2 rounded-md text-center p-3 px-6 my-1 transform-gpu hover:-translate-y-0.5 cursor-pointer"
          >
            <button
              onClick={() => signIn(provider.id, { callbackUrl: callbackURL })}
            >
              <div className="flex gap-x-2 items-center">
                <div>{logo(provider.name)}</div>
                <div>Sign in with {provider.name}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  console.log(providers);

  return {
    props: { providers },
  };
}

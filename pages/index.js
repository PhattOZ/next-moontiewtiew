export default function Home({ movies }) {
  return (
    <div>
      <video autoPlay muted loop className="h-screen object-cover">
        <source src="/marvelOpening.mp4"></source>
      </video>
    </div>
  );
}

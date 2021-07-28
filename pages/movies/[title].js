export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { title: "a" } }],
    fallback: false,
  };
}

export default function Movie() {
  return <div></div>;
}

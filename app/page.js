export default function Home() {
  return (
    <>
      <h1>Welcome to my Next.js App!</h1>
      <p>
        I'm excited to share my journey of building in public and documenting my
        progress along the way.
      </p>
      <Greeting />
    </>
  );
}

function Greeting() {
  return <p>Building in public since 2026</p>;
}

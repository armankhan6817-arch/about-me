export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-8 flex flex-col gap-8 bg-emerald-950 text-gray-100 min-h-screen">
      <Header />
      <About />
      <Projects />
      <Links />
    </main>
  );
}

function Header() {
  return (
    <header>
      <h1 className="text-4xl font-bold text-shadow-[0_0_3px_rgba(255,255,255,0.8)] text-green-500">
        Armaan khan
      </h1>

      <p className="text-gray-300">
        Learning to build AI-powered tools, solo, from Delhi
      </p>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
        About Me
      </h2>
      <p>
        I'm a passionate developer with a keen interest in AI and web
        development. I enjoy sharing my learning experiences and building tools
        that help people genuinely and uniquely. I may have started learning to
        code a bit late but i am determined to make up for lost time and become
        a proficient developer.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
        Projects
      </h2>
      <ul className="list-none p-0 flex flex-col gap-2">
        <li className="border rounded-lg p-4 shadow-sm">
          <a
            href="https://armankhan6817-arch.github.io/saas-learning/"
            target="_blank"
            className="text-green-500 underline"
          >
            Project 1: Weather app
          </a>{" "}
          — city search using two chained APIs, vanilla JS
        </li>
        <li className="border rounded-lg p-4 shadow-sm">
          <a
            className="text-green-500 underline"
            href="https://armankhan6817-arch.github.io/saas-learning/toDoPersistentShow.html"
            target="_blank"
          >
            Project 2: TO-Do App
          </a>
          - add, delete, local storage, vanilla JS
        </li>
      </ul>
    </section>
  );
}

function Links() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
        Links{" "}
      </h2>
      <a
        className="text-green-200 underline"
        href="https://github.com/armankhan6817-arch"
        target="_blank"
      >
        <b>
          <i>Github</i>
        </b>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Links />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Armaan khan</h1>
      <p>Learning to build AI-powered tools, solo, from Delhi</p>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
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
      <h2>Projects</h2>
      <ul>
        <li>
          <a
            href="https://armankhan6817-arch.github.io/saas-learning/"
            target="_blank"
          >
            Project 1: Weather app
          </a>{" "}
          — city search using two chained APIs, vanilla JS
        </li>
        <li>
          <a
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
      <h2>Links: </h2>
      <a href="https://github.com/armankhan6817-arch" target="_blank">
        <b>
          <i>Github</i>
        </b>
      </a>
    </div>
  );
}

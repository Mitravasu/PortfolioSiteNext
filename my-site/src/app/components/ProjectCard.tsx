import Image from "next/image";

type Project = {
  title: string;
  description: string;
  extralinks: string;
  code: string;
  demo: string;
  image: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard(prop: ProjectCardProps) {
  const list_tech = prop.project.tech.map((tech) => (
    <li className="bg-accent text-primary p-2 rounded-lg">{tech}</li>
  ));

  const codeButton = prop.project.code ? (
    <a
      href={prop.project.code}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary"
    >
      Code
    </a>
  ) : null;

  const demoButton = prop.project.demo ? (
    <a
      href={prop.project.demo}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary"
    >
      Demo
    </a>
  ) : null;

  const readMore = prop.project.extralinks ? (
    <a
      href={prop.project.extralinks}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary"
    >
      Read More
    </a>
  ) : null;

  return (
    <div className="flex flex-col md:flex-row w-full bg-primary text-secondary rounded-lg space-y-3 md:space-y-0">
      <Image
        src={"/" + prop.project.image}
        alt="project"
        width={400}
        height={250}
        className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
      />
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold bg-accent w-full rounded-tr-lg p-4 text-primary">
          {prop.project.title}
        </h1>
        <div className="p-4 space-y-2">
          <ul className="list-none flex flex-wrap gap-2">{list_tech}</ul>
          <p>{prop.project.description}</p>
          <div className="flex flex-wrap gap-2">
            {codeButton}
            {demoButton}
            {readMore}
          </div>
        </div>
      </div>
    </div>
  );
}

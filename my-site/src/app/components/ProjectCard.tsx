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
  const list_tech = prop.project.tech.map((tech, index) => (
    <li
      key={"project_tech_" + index}
      className="bg-accent text-white p-2 rounded-lg font-bold"
    >
      {tech}
    </li>
  ));

  const codeButton = prop.project.code ? (
    <a
      href={prop.project.code}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary font-bold"
    >
      Code
    </a>
  ) : null;

  const demoButton = prop.project.demo ? (
    <a
      href={prop.project.demo}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary font-bold"
    >
      Demo
    </a>
  ) : null;

  const readMore = prop.project.extralinks ? (
    <a
      href={prop.project.extralinks}
      target="_blank"
      className="border-2 border-accent p-3 rounded-lg hover:bg-accent hover:text-primary font-bold"
    >
      Read More
    </a>
  ) : null;

  return (
    <div className="flex flex-col md:flex-row w-full text-black">
      <Image
        src={"/" + prop.project.image}
        alt="project"
        width={400}
        height={250}
        className="h-full"
      />
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold bg-accent w-full p-4 text-white">
          {prop.project.title}
        </h1>
        <div className="p-4 space-y-2 bg-primary h-full">
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

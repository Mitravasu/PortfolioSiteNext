import Image from "next/image";

type Experience = {
  role: string;
  company: string;
  dates: string;
  link: string;
  image: string;
  tech: string[];
  description: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard(prop: ExperienceCardProps) {
  const list_descriptions = prop.experience.description.map((desc, index) => (
    <li key={"exp_desc_" + index}>{desc}</li>
  ));

  const list_tech = prop.experience.tech.map((tech, index) => (
    <li
      key={"exp_tech_" + index}
      className="bg-accent text-primary p-2 rounded-lg"
    >
      {tech}
    </li>
  ));

  return (
    <div>
      <div className="flex justify-start w-full">
        <h1 className="text-xl italic">{prop.experience.dates}</h1>
      </div>
      <div className="bg-primary text-secondary rounded-lg">
        <div className=" bg-accent w-full rounded-t-lg p-4 text-primary">
          <a
            className="text-2xl font-bold hover:text-divider"
            href={prop.experience.link}
            target="_blank"
          >
            {prop.experience.company}
          </a>
          <h2 className="text-xl font-bold">{prop.experience.role}</h2>
        </div>
        <div className="p-4 space-y-1">
          <ul className="list-none flex gap-2 flex-wrap">{list_tech}</ul>
          <ul className="list-disc px-4 text-lg">{list_descriptions}</ul>
        </div>
      </div>
    </div>
  );
}

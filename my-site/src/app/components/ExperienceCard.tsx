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
      className="bg-accent text-white p-2 rounded-lg  font-bold "
    >
      {tech}
    </li>
  ));

  return (
    <div>
      <div className="flex justify-start w-full">
        <h1 className="text-xl italic font-bold">{prop.experience.dates}</h1>
      </div>
      <div className="text-black">
        <div className="bg-accent w-full p-4 text-white">
          <a
            className="text-2xl font-bold hover:text-divider"
            href={prop.experience.link}
            target="_blank"
          >
            {prop.experience.company}
          </a>
          <h2 className="text-xl font-bold">{prop.experience.role}</h2>
        </div>
        <div className="p-4 bg-primary space-y-1">
          <ul className="list-none flex gap-2 flex-wrap">{list_tech}</ul>
          <ul className="list-disc px-4 text-lg">{list_descriptions}</ul>
        </div>
      </div>
    </div>
  );
}

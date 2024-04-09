import SkillsCard from "./SkillsCard";

export default function Skills() {
  const skillSet = [
    {
      type: "Languages",
      skills: [
        "Java",
        "Python",
        "C",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "GraphQL",
      ],
    },
    {
      type: "Frameworks and Libraries",
      skills: [
        "Node.js",
        "Express.js",
        "React",
        "Vue.js",
        "jQuery",
        "Bootstrap",
        "Tailwind CSS",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "ChartJS",
        "JUnit 5",
        "Selenium",
        "Cucumber",
      ],
    },
    {
      type: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Neo4j", "MS Access"],
    },
    {
      type: "Concepts",
      skills: [
        "RESTful APIs",
        "Object Oriented Programming",
        "MVC Architecture",
        "Microservices Architecture",
        "Agile Scrum",
      ],
    },
    {
      type: "Tools",
      skills: [
        "Git",
        "Jira",
        "Heroku",
        "Docker",
        "WordPress",
        "Netlify",
        "Postman",
      ],
    },
  ];

  const skillsCards = skillSet.map((skill) => {
    return <SkillsCard skill={skill} />;
  });
  return (
    <div className="h-full bg-secondary text-primary flex flex-col px-10 py-4">
      <h1 className="text-4xl font-bold py-10">Skills</h1>
      <div className="flex flex-wrap gap-10">{skillsCards}</div>
    </div>
  );
}

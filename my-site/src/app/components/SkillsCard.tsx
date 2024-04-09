type Skill = {
  type: string;
  skills: string[];
};

type SkillsCardProps = {
  skill: Skill;
};

export default function SkillsCard(prop: SkillsCardProps) {
  const listSkills = prop.skill.skills.map((skill) => (
    <li className="bg-accent text-primary p-2 rounded-lg">{skill}</li>
  ));

  return (
    <div className="flex flex-col bg-primary text-secondary rounded-lg w-1/2">
      <h1 className="text-2xl font-bold bg-accent rounded-t-lg p-4 text-primary">
        {prop.skill.type}
      </h1>
      <ul className="list-none flex flex-wrap gap-2 p-4">{listSkills}</ul>
    </div>
  );
}

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title:
        "Attitudes in replies of downvoted comments in Specialized and Generalized communities",
      description:
        "An analysis of the sentiment of replies to negatively voted comments in specialized and generalized communities on Reddit to uncover differences in online interactions between these two types of communities.",
      extralinks: "",
      code: "https://github.com/Mitravasu/CSCD25DataStoryFinal",
      demo: "https://mitravasu-cscd25-data-story-site.vercel.app/",
      image: "RedditSentiment.png",
      tech: [
        "Python",
        "Jupyter Notebook",
        "nltk",
        "pandas",
        "numpy",
        "matplotlib",
        "Reddit API",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Spotify Recommendations",
      description:
        "A tool which allows Spotify users to generate recommendations based on their playlists and liked songs, and allows them to fine tune recommendations based on audio features.",
      extralinks: "",
      code: "https://github.com/UTSCC09/project-bestestc09group",
      demo: "",
      image: "spotifyrecs.png",
      tech: [
        "React",
        "MongoDB",
        "Express",
        "GraphQL",
        "Bootstrap",
        "Axios",
        "Spotify API",
        "Apollo",
        "Docker",
        "ChartJS",
      ],
    },
    {
      title: "AfriConnect",
      description:
        "An e-learning web-app developed to help the African Impact Initiative educate African entrepreneurs",
      extralinks: "",
      code: "https://github.com/team-nov/team-nov-production",
      demo: "https://africonnect.netlify.app/",
      image: "africonnect.png",
      tech: ["React", "MongoDB", "Express", "Netlify"],
    },
    {
      title: "ManageU",
      description:
        "A discord bot that helps you organize your time by keeping track of tasks and sending reminder texts.",
      extralinks: "",
      code: "https://github.com/l3n0ire/pythonDiscordBot",
      demo: "",
      image: "manageu.png",
      tech: ["Python", "MongoDB", "Heroku", "discord.py"],
    },
    {
      title: "CourierU",
      description:
        "A management tool for food banks and charities to coordinate deliveries to those in need.",
      extralinks:
        "https://stories.mlh.io/5-awesome-hacks-you-can-make-with-radar-1b3f76dc7ea9",
      code: "https://github.com/l3n0ire/courieru",
      demo: "",
      image: "courieru.png",
      tech: ["Bootstrap", "MongoDB", "Radar", "Heroku"],
    },
    {
      title: "Physics Playground",
      description:
        "A tool that allows highschool students to experience physics lab while unable to go to school due to the Covid19 pandemic",
      extralinks: "",
      code: "https://github.com/l3n0ire/PhysicsPlaygroundUnity",
      demo: "https://physicsplaygroundu.netlify.app/",
      image: "physicplaygroundu.png",
      tech: ["Unity", "C#", "React", "Netlify"],
    },
    {
      title: "CookingU",
      description: "A website for sharing recipes",
      image: "cookingu.png",
      extralinks: "",
      code: "https://github.com/l3n0ire/CookingU",
      demo: "https://cookingu.netlify.app/",
      tech: ["React", "Netlify"],
    },
    {
      title: "BeatStar",
      description:
        "A music rythmn game made in Java to showcase OOP principles",
      extralinks: "",
      code: "https://github.com/Mitravasu/BeatStar",
      demo: "",
      image: "beatstar.png",
      tech: ["Java", "OOP", "GUI"],
    },
  ];

  const projectCards = projects.map((project, index) => {
    return <ProjectCard key={"project" + index} project={project} />;
  });

  return (
    <div className="h-full bg-secondary text-primary flex flex-col px-10 py-4">
      <h1 className="text-4xl font-bold py-10">Projects</h1>
      <div className="flex flex-wrap gap-10">{projectCards}</div>
    </div>
  );
}

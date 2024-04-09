import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer, Automation",
      company: "Basis Technologies",
      dates: "January 2024 - Present",
      link: "https://basis.net/",
      image: "basis.png",
      tech: [
        "Java",
        "Selenium",
        "Harness",
        "Jenkins",
        "Allure TestOps",
        "Cucumber",
        "JUnit 5",
        "JIRA",
        "JavaScript",
      ],
      description: [
        "Developed speed and coverage improvements to the automated testing frameworks and weekly test regressions to ensure high quality of the Basis Platform.",
      ],
    },
    {
      role: "Software Engineer",
      company: "University of Toronto Hatchery",
      dates: "September 2021 - December 2023",
      link: "https://hatchery.engineering.utoronto.ca/",
      image: "hatchery.png",
      tech: [
        "PHP",
        "SQL",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Wordpress",
        "Tailwind",
      ],
      description: [
        "Developed a document management tool by integrating DocuSign API and user databases, to streamline administration processes.",
        "Developed an email scheduling tool using Vue.js, PHP, and Wordpress, simplifying the process of scheduling and sending emails to various cohorts and startups.",
        "Optimized SQL queries to improve the performance of the administrator dashboard, resulting in 41% faster load times.",
        "Restructured application forms to reflect updated requirements and refactored code to eliminate redundancies",
        "Implemented a class based system for sending out application emails, resulting in improved readability, modularity, and efficiency of the email sending process.",
      ],
    },
    {
      role: "Software Engineer, Automation",
      company: "Basis Technologies",
      dates: "June 2023 - August 2023",
      link: "https://basis.net/",
      image: "basis.png",
      tech: ["Java", "Selenium", "Cucumber", "JUnit 5", "JIRA", "JavaScript"],
      description: [
        "Developed an alternative testing framework using JUnit5, Selenium, Java, OOP, and various Design Patterns, resulting in increased parallel test execution and reduced test execution times.",
        "Migrated over 50 test cases to the new framework by refactoring existing test cases to fit the new framework, leading to over 50% reduction in testing times.",
      ],
    },
    {
      role: "Software Engineer, Platform",
      company: "Basis Technologies",
      dates: "June 2022 - August 2022",
      link: "https://basis.net/",
      image: "basis.png",
      tech: ["Java", "Redis", "JUnit", "SQL", "MongoDB", "Kafka", "Docker"],
      description: [
        "Implemented bid tracking in a mock environment by utilizing Redis in-memory database to track spends, resulting in the mock environment more accurately simulating real-time bidding.",
        "Developed a RESTful API for debugging client ad campaigns by connecting Kafka messages to Java backend, enabling developers to filter and access messages programmatically, significantly reducing debugging time.",
      ],
    },
    {
      role: "Software Engineer",
      company: "University Health Network",
      dates: "January 2021 - August 2021",
      link: "https://www.uhn.ca/",
      image: "uhn.png",
      tech: [
        "PHP",
        "SQL",
        "JavaScript",
        "Wordpress",
        "MS Access",
        "Visual Basic",
        "Python",
      ],
      description: [
        "Created a payroll portal to automate the timesheet submission process which is used by 50 employees bi-weekly to submit their work hours",
        "Implemented automatic reminder and summary emails to increase transparency between employees and their project managers",
        "Reduced database redundancies by 31% by conducting audits and normalizing research data in a MS Access database",
        "Created reports and forms on MS Access using research data on kidney patients and the barriers preventing them from receiving treatment",
      ],
    },
    {
      role: "Research Support",
      company: "Municipal Property Assessment Corporation",
      dates: "August 2019 - September 2019",
      link: "https://www.mpac.ca/en",
      image: "mpac.jpg",
      tech: ["MS Excel", "Visual Basic"],
      description: [
        "Verified correctness of information by highlighting discrepancies for an invoice management project",
        "Reduced information retrieval times by using Visual Basic to create a search box feature in the spreadsheet",
        "Ensured project was on track by sending daily progress reports and discussing future steps with the project manager",
        "Implemented feedback and made changes promptly",
        "Demonstrated excellent time management and organizational skills by finishing tasks on time",
      ],
    },
  ];

  const experienceCards = experiences.map((experience) => {
    return <ExperienceCard experience={experience} />;
  });

  return (
    <div className="h-full bg-secondary text-primary flex flex-col px-10 py-4">
      <h1 className="text-4xl font-bold py-10">Experience</h1>
      <div className="flex flex-col space-y-6">{experienceCards}</div>
    </div>
  );
}

import Image from "next/image";

export default function Intro() {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center stars-bg">
      <div className="pb-5">
        <Image
          src="/MitravasuPrakash.jpg"
          alt="Mitravasu Prakash"
          className="rounded-full"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="font-bold text-4xl">Mitravasu Prakash</h1>
        <h2 className="text-3xl">Software Engineer</h2>
        <ul className="flex space-x-3 text-xl">
          <li>
            <a
              className="hover:text-primary"
              href="MitravasuPrakash_Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary"
              href="https://www.linkedin.com/in/mitravasu-prakash/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary"
              href="https://github.com/Mitravasu"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

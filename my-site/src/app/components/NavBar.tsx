export default function NavBar() {
  return (
    <div className="flex h-fit justify-center sm:justify-end items-center bg-secondary text-white sticky top-0 p-6">
      <ul className="flex flex-col font-bold text-xl sm:space-x-3 sm:flex-row items-center">
        <li>
          <a className="px-4 hover:text-primary" href="#intro">
            Home
          </a>
        </li>
        <li>
          <a className="px-4 hover:text-primary" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="px-4 hover:text-primary" href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="px-4 hover:text-primary" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="px-4 hover:text-primary" href="#skills">
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}

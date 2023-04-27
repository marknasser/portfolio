import { navLinks } from "../../constants";

function DotGroup({ selectedPage, setSelectedPage }) {
  const selectedStyle = `relative bg-light  before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-light before:left-[-50%] before:top-[-50%]`;
  return (
    <ul className="fixed flex flex-col gap-6 top-[60%] right-7 z-40">
      {navLinks.map((nav) => (
        <a href={`#${nav.id}`}>
          <li
            key={nav.id}
            className={`${
              selectedPage === nav.id ? selectedStyle : "bg-secondary"
            } w-3 h-3 rounded-full transition duration-500`}
            onClick={() => setSelectedPage(nav.id)}
          ></li>
        </a>
      ))}
    </ul>
  );
}

export default DotGroup;

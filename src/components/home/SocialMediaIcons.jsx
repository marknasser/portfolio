import { socialMedia } from "../../constants";

function SocialMediaIcons({ direction }) {
  const switcher = direction === "row" ? "flex-row" : "flex-col";

  return (
    <div
      className={`flex ${switcher}  justify-center md:justify-start gap-7 my-10`}
    >
      {socialMedia.map((app) => (
        <a
          className="hover:opacity-50 transition duration-500"
          href={app.url}
          target="_blank"
          rel="noreferrer"
        >
          <img className="max-w-8 max-h-8" src={app.icon} alt={app.app} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;

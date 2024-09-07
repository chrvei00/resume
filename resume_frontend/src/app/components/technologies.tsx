import "./technologies.css";

interface technology {
  name: string;
  image: any;
}

interface TechnologiesProps {
  technologies: technology[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="linksSection">
      <h2>Technologies</h2>
      <div className="links">
        {technologies.map((technology) => (
          <a
            href={`https://www.google.com/search?q=${technology.name}`}
            key={technology.name}
          >
            <img src={technology.image} alt={technology.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

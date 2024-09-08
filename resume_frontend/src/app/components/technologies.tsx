import "./technologies.css";
import Image from "next/image";

interface technology {
  name: string;
  image: any;
}

interface TechnologiesProps {
  technologies: technology[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="technologySection">
      <h2 className="technologyHeader">Technologies</h2>
      <div className="links">
        {technologies.map((technology) => (
          <div className="icon" key={technology.name}>
            <Image
              className="technologyIcon"
              src={technology.image}
              alt={technology.name}
            />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

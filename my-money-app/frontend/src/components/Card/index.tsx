import "./index.css";

interface ICardProps {
  color: string;
  valueProps: number | string | undefined;
  description: string;
}

const Card = ({ color, valueProps, description }: ICardProps) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="value">
        <h2>
          R$<span>{valueProps}</span>
        </h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;

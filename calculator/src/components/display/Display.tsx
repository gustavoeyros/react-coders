import "./Display.css";

interface IDisplayProps {
  value: string;
}

const Display = ({ value }: IDisplayProps) => {
  return <div className="display">{value}</div>;
};

export default Display;

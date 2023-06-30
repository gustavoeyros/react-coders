import "./index.css";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: IButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

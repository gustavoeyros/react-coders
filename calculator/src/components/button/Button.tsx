import "./Button.css";

interface IButtonProps {
  label: string;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
  click?: (label: string) => void;
}

const Button = ({ label, operation, double, triple, click }: IButtonProps) => {
  return (
    <button
      onClick={() => click && click(label)}
      className={`
        btn-label 
        ${operation ? "operation" : ""}
        ${double ? "double" : ""}
        ${triple ? "triple" : ""}
        `}
    >
      {label}
    </button>
  );
};

export default Button;

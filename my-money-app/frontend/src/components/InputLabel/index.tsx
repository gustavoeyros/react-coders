import "./index.css";

interface IInputLabelProps {
  id: string;
  placeholder: string;
  type: string;
  description: string;
}

const InputLabel = ({
  id,
  placeholder,
  type,
  description,
}: IInputLabelProps) => {
  return (
    <div className="label-input">
      <label htmlFor="name">{description}</label>
      <input
        id={id}
        type={type}
        className="label-input__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabel;

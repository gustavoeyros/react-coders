import { ForwardedRef, forwardRef } from "react";
import "./index.css";

interface IInputLabelProps {
  id: string;
  placeholder: string;
  type: string;
  description: string;
  ref?: React.RefObject<HTMLInputElement>;
  value?: string | number;
  onChange?: (e: any) => void;
}

const InputLabel = forwardRef(
  (
    { id, placeholder, type, description, value, onChange }: IInputLabelProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="label-input">
        <label htmlFor="name">{description}</label>
        <input
          id={id}
          type={type}
          className="label-input__input"
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default InputLabel;

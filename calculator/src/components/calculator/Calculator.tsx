import { useState } from "react";
import Button from "../button/Button";
import Display from "../display/Display";
import "./Calculator.css";

interface IStateStructure {
  displayValue: string;
  clearDisplay: boolean;
  operation: string | null;
  values: number[];
  current: number;
  prevOperation?: string | null;
}

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const [displayNumber, setDisplayNumber] = useState<IStateStructure>({
    ...initialState,
    prevOperation: null,
  });

  const clearMemory = () => {
    setDisplayNumber({ ...initialState });
  };

  const setOperation = (operation: string) => {
    const newValue = parseFloat(displayNumber.displayValue);
    const { values, current, prevOperation } = displayNumber;

    let result = 0;
    if (current === 0) {
      result = newValue;
    } else {
      if (prevOperation) {
        result = eval(`${values[0]} ${prevOperation} ${newValue}`);
      } else {
        result = values[0];
      }
    }

    const newValues = [result, 0];
    const newDisplayValue = String(result);

    setDisplayNumber((prevState: IStateStructure) => ({
      ...prevState,
      values: newValues,
      operation,
      prevOperation: operation === "=" ? null : operation,
      current: current + 1,
      clearDisplay: true,
      displayValue: newDisplayValue,
    }));

    console.log("resultado", result);
  };

  const addDigit = (n: string) => {
    if (n === "." && displayNumber.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      displayNumber.displayValue === "0" || displayNumber.clearDisplay;
    const currentValue = clearDisplay ? "" : displayNumber.displayValue;
    const displayValue = currentValue + n;
    console.log("currentValue", displayValue);
    setDisplayNumber({ ...displayNumber, displayValue, clearDisplay: false });
  };

  return (
    <div className="container">
      <Display value={displayNumber.displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>
  );
};

export default Calculator;

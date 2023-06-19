interface IEntryProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readOnly?: boolean;
  className: string;
  changeValue?: (value: any) => void;
}

export default function Entry({
  text,
  type,
  value,
  readOnly,
  changeValue,
  className,
}: IEntryProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-4">{text}</label>
      <input
        type={type ?? "text"}
        value={value}
        readOnly={readOnly}
        onChange={(e) => (changeValue ? changeValue(e.target.value) : "")}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          readOnly ? "" : "focus:bg-white"
        }`}
      />
    </div>
  );
}

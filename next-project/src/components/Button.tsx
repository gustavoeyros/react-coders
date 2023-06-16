interface IButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
}

export default function Button({ children, className, color }: IButtonProps) {
  const formattedColor = color ?? "gray";
  return (
    <button
      className={`bg-gradient-to-r from-${formattedColor}-400 to-${formattedColor}-700 text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

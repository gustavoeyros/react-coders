import Title from "./Title";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md">
      <Title>{title}</Title>
      <div className="p-6">{children}</div>
    </div>
  );
}

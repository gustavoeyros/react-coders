interface IIfProps {
  test: boolean;
  children: React.ReactNode;
}

const If = ({ test, children }: IIfProps) => {
  if (test) {
    return children;
  } else {
    return false;
  }
};

export default If;

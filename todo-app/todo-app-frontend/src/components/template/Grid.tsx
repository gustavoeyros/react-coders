interface IGridProps {
  cols: string;
  children: React.ReactNode;
}

const Grid = ({ cols, children }: IGridProps) => {
  const toCssClasses = (numbers: string): string => {
    const cols = numbers ? numbers.split(" ") : [];
    let classes = "";

    if (cols[0]) classes += `col-xs-${cols[0]}`;
    if (cols[1]) classes += `col-sm-${cols[1]}`;
    if (cols[2]) classes += `col-md-${cols[2]}`;
    if (cols[3]) classes += `col-lg-${cols[3]}`;

    return classes;
  };

  const gridClasses = toCssClasses(cols || "12");

  return <div className={`${gridClasses} d-flex mx-1 gap-2`}>{children}</div>;
};

export default Grid;

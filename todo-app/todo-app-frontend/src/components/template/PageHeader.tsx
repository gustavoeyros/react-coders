interface IPageHeader {
  name: string;
  small: string;
}

const PageHeader = ({ name, small }: IPageHeader) => {
  return (
    <header className="page-header">
      <h2>
        {name}
        <small style={{ fontSize: "20px", marginLeft: "5px" }}>
          {small}
        </small>{" "}
      </h2>
    </header>
  );
};

export default PageHeader;

import If from "./If";

interface IIconButtonProps {
  hide?: boolean;
  style: string;
  icon: string;
  onClick?: () => void;
}

const IconButton = ({ hide, style, onClick, icon }: IIconButtonProps) => {
  return (
    <If test={!hide}>
      <button className={"btn btn-" + style} onClick={onClick}>
        <i className={"fa fa-" + icon} />
      </button>
    </If>
  );
};

export default IconButton;

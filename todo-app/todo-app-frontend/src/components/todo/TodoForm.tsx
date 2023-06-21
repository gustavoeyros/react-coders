import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

interface ITodoFormProps {
  handleAdd: () => void;
  description: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClear: () => void;
}

const TodoForm = ({
  handleAdd,
  description,
  handleChange,
  handleSearch,
  handleClear,
}: ITodoFormProps) => {
  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.shiftKey ? handleSearch() : handleAdd();
    } else if (e.key === "Escape") {
      handleClear();
    }
  };
  return (
    <div role="form" className="todoForm d-flex">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Add task"
          onChange={handleChange}
          onKeyUp={keyHandler}
          value={description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={handleAdd} />
        <IconButton style="info" icon="search" onClick={handleSearch} />
        <IconButton style="default" icon="close" onClick={handleClear} />
      </Grid>
    </div>
  );
};

export default TodoForm;

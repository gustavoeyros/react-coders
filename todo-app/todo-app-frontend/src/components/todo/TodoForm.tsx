import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

interface ITodoFormProps {
  handleAdd: () => void;
  description: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm = ({ handleAdd, description, handleChange }: ITodoFormProps) => {
  return (
    <div role="form" className="todoForm d-flex">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Add task"
          onChange={handleChange}
          value={description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={handleAdd} />
      </Grid>
    </div>
  );
};

export default TodoForm;

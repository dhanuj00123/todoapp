import { useFormik } from "formik";
import "./todoForm.scss";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../../store/atoms/todoAtom";

interface Values {
  todoTitle: string;
  todoDesc: string;
  time: string;
}

const ToDoForm = () => {
  const todoFormvalues = useFormik<Values>({
    initialValues: {
      todoTitle: "",
      todoDesc: "",
      time: "",
    },
    onSubmit: (values) => {
      const setData = useSetRecoilState(todoAtom); // recoil
      setData((state) => (state = values)); // not working
    },
  });

  return (
    <>
      <h1>TODO APP </h1>
      <div className="todo">
        <form onSubmit={todoFormvalues.handleSubmit}>
          <input
            name="todoTitle"
            className="input-field"
            placeholder="Whats your plan for today.."
            onChange={todoFormvalues.handleChange}
          />
          <input
            name="todoDesc"
            className="input-field"
            placeholder=" Provide description"
            onChange={todoFormvalues.handleChange}
          />
          <button type="submit">Add todo</button>
        </form>
      </div>
    </>
  );
};
export default ToDoForm;

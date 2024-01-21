import { useRecoilValue } from "recoil";
import "./todoList.scss";
import { todoAtom } from "../../store/atoms/todoAtom";
const TodoList = () => {
  const data = useRecoilValue(todoAtom);
  console.log(data, "data");
  return (
    <>
      <div className="todo-list">
        <table>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>12:30 PM</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>10:30 AM</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TodoList;

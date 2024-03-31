import { toggled } from "../actions";

const updateStatus = (todoId, currenStatus) => {
  return async (dispatch) => {

    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currenStatus,
      }),
      headers: {
        'Content-type' : "application/json; charset=UTF-8"
      }
    });
    const todo = await response.json();
  
    dispatch(toggled(todo.id));
  }
};

export default updateStatus;
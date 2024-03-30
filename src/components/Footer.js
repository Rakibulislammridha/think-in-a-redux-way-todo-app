import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChanged, statusChanged } from '../redux/filters/actions';

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'No Task';
    case 1:
      return '1 Task';
    default:
      return `${no_of_todos} tasks`;
  }
}

export default function Footer() {

  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  const dispatch = useDispatch();
  const todosRemainning = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  }

  const handleColorChanged = (color) => {
    if(colors.includes(color)){
      dispatch(colorChanged(color, 'removed'));
    } else {
      dispatch(colorChanged(color, 'added'));
    }
  }

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemainning)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
          <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => handleStatusChange('All')}>All</li>
          <li>|</li>
          <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handleStatusChange('Incomplete')}>Incomplete</li>
          <li>|</li>
          <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => handleStatusChange('Complete')}>Complete</li>
          <li></li>
          <li></li>
          <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
            onClick={() => handleColorChanged('green')}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
            onClick={() => handleColorChanged('red')}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
            onClick={() => handleColorChanged('yellow')}
          ></li>
      </ul>
    </div>
  )
}

import React from 'react'
import Todo from './Todo'

export default function TodoList() {
  return (
    <div
      class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >
      {/* Todo */}
      <Todo />
    </div>
  )
}

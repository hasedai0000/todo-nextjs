'use client'

import useSWR from 'swr'
import axios from '@/lib/axios'
import { Trash2 } from 'lucide-react'
import { useMemo } from 'react'

const TodoList = ({ searchKeyword, onClickDeleteTodo }) => {
    const { data: todos, error } = useSWR('/api/todos', () =>
        axios
            .get('/api/todos')
            .then(res => res.data)
            .catch(error => {
                console.error(error)
            }),
    )

    if (error) return 'An error has occurred.'

    const showTodoList = useMemo(() => {
        const regexp = new RegExp('^' + searchKeyword, 'i')
        return todos?.filter(todo => {
            return todo.title.match(regexp)
        })
    }, [todos, searchKeyword])

    return (
        <div className="space-y-3">
            {showTodoList?.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center gap-3 rounded bg-white p-2">
                    <label className="flex grow item-center gap-3 hover:cursor-pointer">
                        <input
                            type="checkbox"
                            className="size-5"
                            checked={todo.completed}
                        />
                        {todo.title}
                    </label>
                    <button
                        type="button"
                        className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300"
                        onClick={() => onClickDeleteTodo(todo.id)}>
                        <Trash2 className="size-5 text-gray-500" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TodoList

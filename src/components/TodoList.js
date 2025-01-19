'use client'
import useSWR from 'swr'
import axios from '@/lib/axios'

const TodoList = () => {
    const { data: todos, error } = useSWR('/api/todos', () =>
        axios
            .get('/api/todos')
            .then(res => res.data)
            .catch(error => {
                console.error(error)
            }),
    )

    if (error) return 'An error has occurred.'

    return (
        <ul>
            {todos?.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList

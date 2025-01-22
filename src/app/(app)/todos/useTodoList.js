import { useState } from 'react'

export const useTodoList = ({ getTodos, deleteTodo }) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [errors, setErrors] = useState([])

    const handleChangeSearchKeyword = e => {
        setSearchKeyword(e.target.value)
    }

    const onClickDeleteTodo = id => {
        deleteTodo({ id, setErrors })
    }

    const states = {
        searchKeyword,
        errors,
    }

    const actions = {
        handleChangeSearchKeyword,
        onClickDeleteTodo,
    }

    return [states, actions]
}

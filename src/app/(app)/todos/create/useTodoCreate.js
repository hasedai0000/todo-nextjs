import { useState } from 'react'

export const useTodoCreate = ({ createTodo, user }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])

    const handleChangeTitle = e => {
        setTitle(e.target.value)
    }

    const handleChangeContent = e => {
        setContent(e.target.value)
    }

    const submitForm = event => {
        event.preventDefault()

        createTodo({ user_id: user.id, title, content, setErrors })
    }

    const states = {
        title,
        content,
        errors,
    }

    const actions = {
        handleChangeTitle,
        handleChangeContent,
        submitForm,
    }

    return [states, actions]
}

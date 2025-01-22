import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const useTodo = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const {
        data: user,
        error,
        mutate,
    } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getTodos = async () => {
        await csrf()

        axios
            .get('/api/todos')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const createTodo = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/api/todos', props)
            .then(() => {
                router.push('/todos')
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const deleteTodo = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .delete(`/api/todos/${props.id}`)
            .then(() => {
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)

        if (middleware === 'auth' && !user?.email_verified_at)
            router.push('/verify-email')

        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        getTodos,
        createTodo,
        deleteTodo,
    }
}

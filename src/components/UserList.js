'use client'
import useSWR from 'swr'
import axios from '@/lib/axios'

const UserList = () => {
    const { data: users, error } = useSWR('/api/users', () =>
        axios
            .get('/api/users')
            .then(res => res.data)
            .catch(error => {
                console.error(error)
            }),
    )

    if (error) return 'An error has occurred.'

    return (
        <ul>
            {users?.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList

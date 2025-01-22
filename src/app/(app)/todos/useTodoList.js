import { useState } from 'react'

export const useTodoList = () => {
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleChangeSearchKeyword = e => {
        setSearchKeyword(e.target.value)
    }

    const states = {
        searchKeyword,
    }

    const actions = {
        handleChangeSearchKeyword,
    }

    return [states, actions]
}

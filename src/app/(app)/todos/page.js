'use client'

import Header from '@/app/(app)/Header'
import TodoList from '@/components/TodoList'
import Navigation from './components/Navigation'
import { useTodoList } from './useTodoList'

const Todo = () => {
    const [{ searchKeyword }, { handleChangeSearchKeyword }] = useTodoList()

    return (
        <>
            <Header title="Todo" />
            <main className="mx-auto mt-10 max-w-xl space-y-10">
                <h1 className="text-center text-4xl">Todoアプリ</h1>
                <div className="space-y-5">
                    <div className="flex items-center gap-3 rounded p-2">
                        <input
                            type="text"
                            placeholder="Search Todo"
                            className="grow rounded-s p-2"
                            value={searchKeyword}
                            onChange={handleChangeSearchKeyword}
                        />
                        <Navigation />
                    </div>
                    <div className="rounded bg-slate-200 p-5">
                        <div className="space-y-3">
                            <TodoList searchKeyword={searchKeyword} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Todo

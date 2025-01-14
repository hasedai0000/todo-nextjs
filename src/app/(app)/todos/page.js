import Header from '@/app/(app)/Header'
import TodoList from '@/components/TodoList'

export const metadata = {
    title: 'Laravel - Todo',
}

const Todo = () => {
    return (
        <>
            <Header title="User" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1>Todo一覧</h1>
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo

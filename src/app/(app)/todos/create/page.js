'use client'

import { useAuth } from '@/hooks/auth'
import Header from '../../Header'
import { useTodo } from '@/hooks/todo'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useTodoCreate } from './useTodoCreate'

const CreateTodo = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { createTodo } = useTodo({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const [
        { title, content, errors },
        { handleChangeTitle, handleChangeContent, submitForm },
    ] = useTodoCreate({ createTodo, user })

    return (
        <>
            <Header title="Todo新規作成" />
            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form className="space-y-6" onSubmit={submitForm}>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-medium text-gray-700">
                                        タイトル
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={handleChangeTitle}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <InputError
                                        messages={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block text-sm font-medium text-gray-700">
                                        内容
                                    </label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        rows="4"
                                        value={content}
                                        onChange={handleChangeContent}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <InputError
                                        messages={errors.content}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        <Link href="/todos">戻る</Link>
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        作成
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTodo

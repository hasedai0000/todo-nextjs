'use client'

import Link from 'next/link'

const TodoCreate = ({
    title,
    content,
    handleChangeTitle,
    handleChangeContent,
    handleSubmit,
}) => {
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
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
    )
}

export default TodoCreate

import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/todos/create">新規作成</Link>
            </button>
        </div>
    )
}

export default Navigation

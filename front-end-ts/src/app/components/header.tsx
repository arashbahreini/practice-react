import Link from 'next/link'

export function Header() {
    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-4 px-5 mt-2">
                <Link
                    className="
                bg-amber-300
                text-center
                border-2 border-amber-700 rounded-lg
                font-bold text-red-950
                hover:text-red-100 hover:cursor-pointer hover:bg-amber-500
                mx-2"
                    href="/home"
                >
                    Home
                </Link>
                <Link
                    href="/students"
                    className="
                bg-amber-300
                text-center
                border-2 border-amber-700 rounded-lg
                font-bold text-red-950
                hover:text-red-100 hover:cursor-pointer hover:bg-amber-500
                mx-2"
                >
                    Students
                </Link>
                <div
                    className="
                bg-amber-300
                text-center
                border-2 border-amber-700 rounded-lg
                font-bold text-red-950
                hover:text-red-100 hover:cursor-pointer hover:bg-amber-500
                mx-2"
                >
                    Products
                </div>
                <div
                    className="
                bg-amber-300
                text-center
                border-2 border-amber-700 rounded-lg
                font-bold text-red-950
                hover:text-red-100 hover:cursor-pointer hover:bg-amber-500
                mx-2"
                >
                    About us
                </div>
                <div
                    className="
                bg-amber-300
                text-center
                border-2 border-amber-700 rounded-lg
                font-bold text-red-950
                hover:text-red-100 hover:cursor-pointer hover:bg-amber-500
                mx-2"
                >
                    Contact us
                </div>
            </div>
        </>
    )
}

import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <div className='m-2'>
                <Link className="btn btn-dark me-2" href='/'>Home</Link>
                <Link className="btn btn-dark me-2" href='./students'>Students</Link>
                <Link className="btn btn-dark me-2" href='./about-us'>About us</Link>
            </div>
            <main className='m-2 p-2 border'>{children}</main>
        </>
    )
}

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <div className="m-2">
        <Link className="btn btn-dark me-2" href="/">
          Home
        </Link>
        <Link className="btn btn-dark me-2" href="/students">
          Students
        </Link>
        <Link className="btn btn-dark me-2" href={'/photo-gallery'}>
          Photo gallery
        </Link>
        <Link className="btn btn-dark me-2" href={'/products'}>
          Products
        </Link>
        <Link className="btn btn-dark me-2" href={'/redux-form'}>
          Redux form
        </Link>
        <Link className="btn btn-dark me-2" href={'/data-table'}>
          Data table
        </Link>
        <Link className="btn btn-dark me-2" href={'/hackers'}>
          Hackers
        </Link>
      </div>
      <main className="m-2 p-2 border">{children}</main>
    </>
  );
}

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-center gap-10 mx-auto mt-10">
            <Link className="p-3 text-white rounded bg-slate-500" href='/csr'>Client Side Rendering</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/ssg'> Server Side Rendering</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/isr'>Incremental Static Regeneration</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/ssr'>Static Site Generation</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/csr+ssr'>SSR + CSR</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/ssg+csr'>SSG + CSR</Link>
            <Link className="p-3 text-white rounded bg-slate-500" href='/zustand+ssr'>Zustand + SSR</Link>
        </div>
    );
}
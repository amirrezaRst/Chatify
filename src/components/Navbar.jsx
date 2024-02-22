import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-slate-0 py-3.5 font-sans-medium">
            <div className="container flex items-center justify-between">
                <Image src="/logo.png" width={55} height={55} alt="logo" />
                <ul className="flex items-end lg:gap-8 text-black/80">
                    <Link className="py-3" href="/">صفحه اصلی</Link>
                    <Link className="py-3" href="/">سرویس ها</Link>
                    <Link className="py-3" href="/">مدل 1</Link>
                    <Link className="py-3" href="/">مدل 2</Link>
                    <Link className="py-3" href="/">مدل 3</Link>
                    <Link className="py-3" href="/">درباره ما</Link>
                </ul>
                <div>
                    <button className="rounded-md border border-purple-800 text-purple-900 px-8 py-1.5">ورود</button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
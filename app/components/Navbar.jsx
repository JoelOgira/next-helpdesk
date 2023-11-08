import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="z-50 top-0 w-full">
            <div className="flex items-center space-x-10 justify-between container">

                <Link href="/" >
                    <h2 className="flex items-center font-semibold">
                        Next Helpdesk
                    </h2>
                </Link>


                <div className="flex flex-row items-center space-x-5">
                    <Link href="/"> Dashboard </Link>
                    <Link href="/tickets"> Tickets </Link>
                </div>
            </div>
        </nav>
    )
}

import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:backdrop-opacity-5 transition items-center gap-x-2 hidden md:flex">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                <p className="text-lg text-sky-100 pb-1">
                    UPCI
                </p>
            </div>
        </Link>
    )
}
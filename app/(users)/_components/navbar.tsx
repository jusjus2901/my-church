'use client'

import { Logo } from "@/components/logo"
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {

    
    const currentPath = usePathname();
    const navlinks = [
        { label: "Home", href: "/" },
        { label: "Our Church", href: "/ourChurch" },
        { label: "Events", href: "/events" },
        { label: "Service", href: "/service" },
        { label: "Bibble Verses", href: "/bibbleVerse" },    
      ]

    return (
        <div className="fixed top-0 w-full h-[5.1rem] px-4 bg-gradient-to-r from-slate-200 to-slate-800 flex items-center">
            <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <ul className="text-lg space-x-10 font-semibold hidden lg:flex">
                    {navlinks.map((navlinks) => {
                        return (
                            <Link
                                key={navlinks.href}
                                className={classNames({
                                "tex text-teal-600": navlinks.href === currentPath,
                                "text text-black": navlinks.href !== currentPath,
                                "h hover:text-zinc-500 transition-colors": true,
                                })}
                                href={navlinks.href}>
                                {navlinks.label}
                            </Link>
                        );
                    })}     
                </ul>
               <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <span className="inline-block cursor-pointer lg:hidden">
                        <GiHamburgerMenu/>
                    </span>
                    <div className="w-full flex justify-end md:inline-block md:w-fit">
                        <Button size="sm" variant="outline">
                            <Link href="/sign-up">
                                Login
                            </Link>
                        </Button>
                    </div>
                    
                    <Button size="sm">
                         <Link href="/contact">
                             Contact Us
                         </Link>
                    </Button>
               </div>
            </div>
        </div>
    )
}
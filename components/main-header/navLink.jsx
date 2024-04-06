'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import customStyle from './navLink.module.css';


export default function NavLink({ children, pathName }) {
    const activePathName = usePathname();

    return (
        <Link href={pathName} className={`${customStyle.nav_link} ${activePathName.startsWith(pathName) ? customStyle.nav_link_active : ''}`} >
            {children}
        </Link>
    )
}

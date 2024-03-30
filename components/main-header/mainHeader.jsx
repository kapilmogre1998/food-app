import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import styleClasses from './mainHeader.module.css';

export default function MainHeader() {
    return (
        <header className={styleClasses.main_header_container} >
            <Link className={styleClasses.logo} href='/'>
                <Image src={logoImg} alt="" priority />
                NEXTLEVEL FOOD
            </Link>

            <nav className={styleClasses.nav_style} >
                <ul>
                    <li>Browse Meals</li>
                    <li>Foodies Community</li>
                </ul>
            </nav>
        </header>
    )
}
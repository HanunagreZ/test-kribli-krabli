import Link from "next/link";
import { navList } from "@/layouts/Header/utils";

export const Navigation = () => {
    return (
        <nav className='md:block hidden'>
            <ul className='flex items-center gap-9'>
                {
                    navList.map((item, index) => (
                        <li className='text-lg hover:text-primary-light transition-colors duration-300' key={`Heaver-nav-${index}`}>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

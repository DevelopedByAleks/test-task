'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function UserLink({
    link,
    index,
    menuLength,
}: {
    link: {
        id: string
        name: string
        href: string
    }
    index: number
    menuLength: number
}) {
    const path = usePathname()
    return (
        <Link
            key={link.id}
            href={link.href}
            className={`${index != menuLength ? 'border-b border-b-[#E2E8F0]' : ''} 
                        ${path.includes(link.href) ? 'bg-black text-white' : ''} capitalize text-[#334155] hover:bg-black hover:text-white p-4`}
        >
            {link.name}
        </Link>
    )
}

export default UserLink

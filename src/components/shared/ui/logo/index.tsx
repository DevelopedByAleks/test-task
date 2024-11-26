import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const logoVariants = {
    default: 'text-[#334155]',
    dark: 'text-white',
}

interface LogoProps {
    variant?: keyof typeof logoVariants
}

function Logo({ variant = 'default' }: LogoProps) {
    return (
        <Link
            href="/"
            className={`flex items-center w-full text-base font-medium leading-[19px]  ${logoVariants[variant]}`}
        >
            <Image src="/logo.png" alt={'logo'} width={31} height={40} />
            Byway
        </Link>
    )
}

export default Logo

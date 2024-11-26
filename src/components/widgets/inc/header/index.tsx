import Button from '@/components/shared/ui/button'
import Icon from '@/components/shared/ui/icon'
import Logo from '@/components/shared/ui/logo'
import SearchCategories from '@/components/shared/ui/search-input/categories'
import Link from 'next/link'

function Header() {
    const navMap = [{ id: 2, name: 'categories', url: '/categories' }]
    return (
        <header className="w-full h-[65px] bg-white border-b border-b-[#E2E8F0]">
            <div className="max-w-[1440px] flex justify-between items-center mx-20 2xl:mx-auto h-full">
                <div className="flex items-center gap-[33px] h-full w-full ">
                    <nav className="flex items-center gap-7 ">
                        <Logo />
                        {navMap.map((link) => (
                            <Link
                                href={link.url}
                                key={link.id}
                                className="text-[#334155] capitalize"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <SearchCategories />
                    <Link
                        href={''}
                        className="text-[#334155] capitalize text-nowrap"
                    >
                        teach on byway
                    </Link>
                </div>
                <div className="flex gap-[22px] items-center h-10">
                    {['Heart', 'ShoppingCart', 'Bell'].map((name, index) => (
                        <Icon
                            name={name}
                            key={index}
                            classNames={'text-[#94A3B8] w-5 h-5'}
                        />
                    ))}
                    <Button>
                        <div className="text-white bg-[#94A3B8] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                            J
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header

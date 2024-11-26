import Button from '@/components/shared/ui/button'
import UserLink from '@/components/shared/ui/user-link'
import { Share2 } from 'lucide-react'
import Image from 'next/image'

function UserPanel() {
    const userInfo = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '/images/avatars/1.jpeg',
    }
    const userNavigation = [
        { id: 'nav-link-1', name: 'profile', href: '/dashboard/profile' },
        { id: 'nav-link-2', name: 'my courses', href: '/dashboard/courses' },
        { id: 'nav-link-3', name: 'teachers', href: '/dashboard/teachers' },
        { id: 'nav-link-4', name: 'message', href: '/dashboard/chat' },
        { id: 'nav-link-5', name: 'my reviews', href: '/dashboard/reviews' },
    ]
    return (
        <div className="flex flex-col gap-6 bg-[#F8FAFC] rounded-2xl pt-6 min-w-[290px] max-w-[290px] w-full h-auto overflow-hidden">
            <div className="flex flex-col gap-4 items-center pb-6 border-b border-b-[#E2E8F0] mx-2">
                <div className="w-40 h-40 overflow-hidden rounded-full">
                    <Image
                        src={userInfo.avatar}
                        width={160}
                        height={160}
                        alt={`profile photo of ${userInfo.name}`}
                        className="logo"
                    />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-lg">
                    {userInfo.name}
                </h3>
                <Button className="border border-[#E2E8F0] text-black capitalize bg-white">
                    share profile
                    <Share2 className="text-black" />
                </Button>
            </div>
            <div className="flex flex-col">
                {userNavigation.map((link, index) => (
                    <UserLink
                        link={link}
                        index={index}
                        key={index}
                        menuLength={userNavigation.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserPanel

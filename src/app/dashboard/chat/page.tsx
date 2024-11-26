import DashboardNavigationPanel from '@/components/widgets/dashboard/navigation/ui/nav-panel'
import Image from 'next/image'
import Link from 'next/link'

function DashboardChatPage() {
    const chatData = [
        {
            chatId: 1,
            user: 'Ronald Richards',
            avatar: '/images/avatars/2.png',
            messages: [
                {
                    time: '10:25 AM',
                    sender: 'User',
                    message: 'Hello',
                },
                {
                    time: '10:25 AM',
                    sender: 'User',
                    message:
                        "Just wanted to tell you that I started your course and it's going great!!",
                },
                {
                    time: '12:23 PM',
                    sender: 'Ronald Richards',
                    message:
                        'Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP.',
                },
                {
                    time: '10:25 AM',
                    sender: 'User',
                    message: 'Yes Sure',
                },
            ],
        },
        {
            chatId: 2,
            user: 'Devon Lane',
            avatar: '/images/avatars/3.png',
            messages: [
                {
                    time: '09:00 AM',
                    sender: 'User',
                    message:
                        'Good morning! Can I ask about the course schedule?',
                },
                {
                    time: '09:15 AM',
                    sender: 'Ronald Richards',
                    message:
                        'Good morning! Of course. The course schedule is flexible, but I can share a suggested plan with you.',
                },
                {
                    time: '09:16 AM',
                    sender: 'User',
                    message: 'That would be perfect, thank you!',
                },
            ],
        },
    ]

    return (
        <>
            <DashboardNavigationPanel />
            {chatData.map((chat) => (
                <Link
                    href={`http://localhost:3000/dashboard/chat/${chat.chatId}`}
                    key={chat.chatId}
                    className="w-full h-auto border border-[#E2E8F0] p-4 rounded-2xl flex flex-col gap-4"
                >
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center text-lg text-[#0F172A] font-semibold">
                            <Image
                                src={chat.avatar}
                                alt="chat-avatar"
                                width={40}
                                height={40}
                            />
                            {chat.user}
                        </div>
                        <div className="flex items-center text-[#334155] text-sm">
                            18th March, 2024
                        </div>
                    </div>
                    <div className="text-[#0F172A]">
                        {chat.messages[chat.messages.length - 1].message}
                    </div>
                </Link>
            ))}
        </>
    )
}

export default DashboardChatPage

import Button from '@/components/shared/ui/button'
import Icon from '@/components/shared/ui/icon'
import Image from 'next/image'
import Link from 'next/link'

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
                message: 'Good morning! Can I ask about the course schedule?',
            },
            {
                time: '09:15 AM',
                sender: 'Devon Lane',
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

async function ChatIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const currentChat = chatData.find((el) => Number(el.chatId) === Number(id))
    const stack = {
        userStack: 0,
        senderStack: 0,
    }
    return (
        <>
            <div className="w-full h-auto border border-[#E2E8F0] rounded-2xl flex flex-col gap-4 justify-between">
                <div className="flex justify-between h-[60] border-b border-b-[#E2E8F0] p-4">
                    <div className="flex gap-3 items-center text-lg text-[#0F172A] font-semibold">
                        <Link href={'/dashboard/chat'}>
                            <Icon
                                name={'ArrowLeft'}
                                classNames={'w-4 text-black'}
                            />
                        </Link>
                        <Image
                            src={`${currentChat?.avatar}`}
                            alt="chat-avatar"
                            width={40}
                            height={40}
                        />
                        {currentChat?.user}
                    </div>
                    <div className="flex items-center text-[#334155] text-sm">
                        <Icon
                            name={'Ellipsis'}
                            classNames={'w-4 h-4 text-black'}
                        />
                    </div>
                </div>
                <div className="relative overflow-y-scroll w-full h-full min-h-96 p-4 pt-20">
                    <div className="absolute top-6 left-1/2 text-black border border-[#E2E8F0] bg-[#F1F5F9] rounded-2xl px-3 py-1">
                        Today
                    </div>
                    {currentChat?.messages.map((message, index) => {
                        if (message.sender === 'User') {
                            stack.senderStack = 0
                            stack.userStack += 1
                            return (
                                <div
                                    className="w-auto flex flex-col items-end"
                                    key={index}
                                >
                                    {stack.userStack < 2 && (
                                        <div className="text-[#64748B] text-xs">
                                            {message.time}
                                        </div>
                                    )}
                                    <div className="bg-black px-4 py-2 text-white rounded-lg mt-2">
                                        {message.message}
                                    </div>
                                </div>
                            )
                        } else {
                            stack.userStack = 0
                            stack.senderStack++
                            return (
                                <div
                                    className="w-auto flex flex-col items-start"
                                    key={index}
                                >
                                    {stack.userStack < 2 && (
                                        <div className="text-[#64748B] text-xs flex items-center gap-3">
                                            <Image
                                                src={currentChat.avatar}
                                                alt={'avatar'}
                                                width={40}
                                                height={40}
                                            />
                                            {message.time}
                                        </div>
                                    )}
                                    <div className="bg-[#F1F5F9] px-4 py-2 text-black rounded-lg mt-2">
                                        {message.message}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="h-[80] border-t border-t-[#E2E8F0] p-4 flex gap-6 items-center">
                    <input
                        type="text"
                        className="w-full h-[48px] placeholder:text-[#94A3B8] border border-[#E2E8F0] rounded-lg p-4 text-black"
                        placeholder="Type Your Message"
                    />
                    <Button className="bg-[#3B82F6] text-white rounded-lg h-[48px]">
                        Send
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ChatIdPage

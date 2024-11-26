function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-[#0F172A] text-xl">Messages</h4>
            {children}
        </div>
    )
}

export default ChatLayout

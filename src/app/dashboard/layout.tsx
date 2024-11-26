import UserPanel from '@/components/widgets/dashboard/user/ui/user-panel'
import Footer from '@/components/widgets/inc/footer'
import Header from '@/components/widgets/inc/header'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-dvh w-full bg-white">
            <div className="w-full h-full flex flex-col justify-between">
                <Header />
                <div className="flex gap-10 container h-full mx-20 py-10 max-w-[1440px] 2xl:mx-auto">
                    <div className="w-auto h-auto">
                        <UserPanel />
                    </div>
                    <div className="w-full">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout

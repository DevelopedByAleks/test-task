import Button from '@/components/shared/ui/button'
import Icon from '@/components/shared/ui/icon'

function DashboardNavigationPanel() {
    return (
        <div className="flex justify-between">
            <div className="border border-[#0F172A] rounded-lg flex items-center justify-end px-3 relative min-w-[150px] max-w-[250px] w-full">
                <input
                    type="text"
                    className=" absolute top-0 left-0 w-full h-full bg-transparent pl-3 pr-10 text-black placeholder:text-[#334155] placeholder:text-xs"
                    placeholder="Search User"
                />
                <Icon name={'Search'} classNames={'w-6 h-6 text-black'} />
            </div>
            <div className="flex gap-3 items-center text-[#0F172A] ">
                Sort By
                <div className="flex gap-2">
                    <Button className="border border-[#0F172A] text-[#0F172A]">
                        Relevance
                        <Icon
                            name={'ChevronDown'}
                            classNames={'w-4 h-4 text-black'}
                        />
                    </Button>
                    <Button className="border border-[#0F172A] text-[#0F172A]">
                        <Icon
                            name={'ListFilter'}
                            classNames={'w-4 h-4 text-black'}
                        />
                        Filter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavigationPanel

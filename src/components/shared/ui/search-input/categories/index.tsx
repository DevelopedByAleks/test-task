import Icon from '../../icon'

function SearchCategories() {
    return (
        <div className="border border-[#334155] max-w-[622px] rounded-lg flex items-center justify-start px-3 py-1 relative min-w-[150px] w-full h-10">
            <Icon name={'Search'} classNames={'w-6 h-6 text-black'} />
            <input
                type="text"
                className=" absolute top-0 left-0 w-full h-full bg-transparent pl-12 pr-3 text-black placeholder:text-[#334155] placeholder:text-xs"
                placeholder="Search Categories"
            />
        </div>
    )
}

export default SearchCategories

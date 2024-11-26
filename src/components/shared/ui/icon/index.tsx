import { icons } from 'lucide-react'
type TIconProps = {
    name: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | string
    classNames: string
}

const sizes = {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
}

function Icon({ name, classNames, size = 'xs' }: TIconProps) {
    const LucideIcon = icons[name as keyof typeof icons]

    if (!LucideIcon) {
        console.error(`Icon "${name}" does not exist in lucide-react`)
        return null
    }
    const iconSize = sizes[size as keyof typeof sizes] || size

    return <LucideIcon className={classNames} size={iconSize} />
}

export default Icon

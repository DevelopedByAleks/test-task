import Logo from '@/components/shared/ui/logo'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="px-20 pt-20 pb-[137px] bg-[#1E293B]">
            <div className="max-w-[1440px] flex justify-between mx-auto">
                <div className="flex flex-col gap-4 max-w-[416px] w-full">
                    <Logo variant="dark" />
                    <p className="text-[#CBD5E1] font-normal text-sm">
                        Empowering learners through accessible and engaging
                        online education.
                        <br />
                        Byway is a leading online learning platform dedicated to
                        providing high-quality, flexible, and affordable
                        educational experiences.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-white capitalize text-lg font-semibold">
                        Get Help
                    </div>
                    <div className="flex flex-col gap-2">
                        {['contact us', 'latest articles', 'FAQ'].map(
                            (name, index) => (
                                <Link
                                    href={'/'}
                                    key={index}
                                    className="text-[#CBD5E1] capitalize text-sm"
                                >
                                    {name}
                                </Link>
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-white capitalize text-lg font-semibold">
                        Programs
                    </div>
                    <div className="flex flex-col gap-2">
                        {[
                            'art & design',
                            'business',
                            'IT & software',
                            'languages',
                            'programming',
                        ].map((name, index) => (
                            <Link
                                href={'/'}
                                key={index}
                                className="text-[#CBD5E1] capitalize text-sm"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-white capitalize text-lg font-semibold">
                            Contact Us
                        </div>
                        <div className="text-[#CBD5E1] capitalize text-sm">
                            Address:
                            <Link href={''}>
                                123 Main Street, Anytown, CA 12345
                            </Link>
                        </div>
                        <div className="text-[#CBD5E1] capitalize text-sm">
                            Tel:<Link href={''}>+(123) 456-7890</Link>{' '}
                        </div>
                        <div className="text-[#CBD5E1] capitalize text-sm">
                            Mail:<Link href={''}>bywayedu@webkul.in</Link>{' '}
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {[
                            'facebook.png',
                            'x.png',
                            'google.svg',
                            'github.svg',
                        ].map((path, index) => (
                            <Link
                                href={'/'}
                                key={index}
                                className="w-10 h-10 bg-white p-1 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src={`/images/social/${path}`}
                                    alt={path}
                                    width={16}
                                    height={16}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import { redirect } from 'next/navigation'

function Home() {
    redirect('/dashboard/chat')
    return <></>
}
export default Home

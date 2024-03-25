import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)
    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
            width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <div className='flex item-center absolute left-0'>
            {
                session? <Link href="/api/auth/signout">
                    <div className='flex item-center h-full px-5 py-3 text-cyan-600 text-medium'>
                        Sign-Out of {session.user?.name}
                    </div>
                </Link>
                : <Link href="/api/auth/signin"><div className='flex item-center h-full px-5 py-3 text-cyan-600 text-medium'>
                    Sign-In</div></Link>
            }
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            </div>
        </div>
    )
}
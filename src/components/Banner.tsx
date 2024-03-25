'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const {data: session} = useSession()

    return (
        <div className={styles.banner} onClick={()=>{ setIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt='bannerVac'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h3 className='text-xl font-serif'>ประชาสัมพันธ์การให้บริการวัคซีนในบุคลากรและนักศึกษาที่มีอายุระหว่าง 20-50 ปี</h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-300 text-xl'>Welcome {session.user?.name}</div>
                : null
            }
            <button className='bg-white text-lime-600 border border-lime-600
                font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                hover:bg-lime-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                Select Hospital
            </button>
        </div>
    );
}
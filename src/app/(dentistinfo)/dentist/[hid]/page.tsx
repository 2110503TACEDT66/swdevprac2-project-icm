import Image from "next/image"
import getDentist from "@/libs/getDentist"
import Link from "next/link"

export default async function DentistDetailPage( {params} : { params: {hid:string}}) {

    const dentistDetail = await getDentist(params.hid)
   
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">{dentistDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={`/img/${dentistDetail.data.picture}`}
                alt='Dentist Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-black text-left"> years of experience: {dentistDetail.data.years_of_experience}
                <div className="text-md mx-5 text-black">area of expertise: {dentistDetail.data.area_of_expertise}</div>

                </div>
            </div>
        </main>
    )
}
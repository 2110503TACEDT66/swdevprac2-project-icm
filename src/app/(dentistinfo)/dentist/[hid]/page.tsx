import Image from "next/image"
import getDentist from "@/libs/getDentist"
import Link from "next/link"

export default async function DentistDetailPage( {params} : { params: {hid:string}}) {

    const dentistDetail = await getDentist(params.hid)
   
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">{dentistDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={dentistDetail.data.picture}
                alt='Dentist Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-black text-left">Address: {dentistDetail.data.address}
                <div className="text-md mx-5 text-black">District: {dentistDetail.data.district}</div>
                <div className="text-md mx-5 text-black">Province: {dentistDetail.data.province}</div>
                <div className="text-md mx-5 text-black">Postalcode: {dentistDetail.data.postalcode}</div>
                <div className="text-md mx-5 text-black">Tel: {dentistDetail.data.tel}</div>

                <Link href={`/booking?id=${params.hid}&name=${dentistDetail.data.name}`}>
                <button className="block rounded-md bg-lime-400 hover:bg-lime-600 my-11 px-3 py-2 shadow-sm"
                id="Book Dentist" name="Book Dentist">
                    Book Dentist
                </button>
                </Link>
                </div>
            </div>
        </main>
    )
}
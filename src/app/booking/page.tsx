"use client"
import DateReserve from "@/components/DateReserve"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../../interface"
import { addBooking } from "@/redux/features/bookSlice"
//import { getServerSession } from "next-auth"
//import { AuthOptions } from "next-auth"
//import getUserProfile from "@/libs/getUserProfile"
//import { authOptions } from "../api/auth/[...nextauth]/route"

export default function Booking() {

    const urlParams = useSearchParams()
    const hid = urlParams.get('id')
    const dentist = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()
    const makeBooking = () => {
        if(name && lastname && id && vacDentist && vacDate) {
            const item:BookingItem ={
                name: name,
                surname: lastname,
                id: id,
                dentist: vacDentist,
                bookDate: dayjs(vacDate).format("YYYY/MM/DD"),
            }
            dispatch(addBooking(item))
        }
    }

    const [vacDate,setVacDate] = useState<Dayjs|null>(null)
    const [vacDentist,setVacDentist] = useState<string>('Chula')
    const [name, setName] = useState('Name')
    const [lastname, setLastname] = useState('Lastname')
    const [id, setId] = useState('Citizen ID')
    
    /*const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    */
       
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 m-5 p-5">
            {/* <div className="text-2xl text-black">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2 text-black"><tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody></table> */}

            <div className='text-3xl font-medium text-black'>Dentist Booking </div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Create your booking</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setVacDate(value)}}
                onDentistChange={(value:string)=>{setVacDentist(value)}}
                onNameChange={(value:string)=>{setName(value)}}
                onLastnameChange={(value:string)=>{setLastname(value)}}
                onIdChange={(value:string)=>{setId(value)}}/>
            </div>
            <button className="block rounded-md bg-lime-400 hover:bg-lime-600 px-3 py-2 shadow-sm"
             id="Book Vaccine" name="Book Vaccine" onClick={makeBooking}>
                Book Dentist
            </button>
        </main>
    )
}
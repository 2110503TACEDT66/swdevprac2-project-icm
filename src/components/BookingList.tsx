"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import bookSlice, { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList() {
    const bookItems = useAppSelector((state)=> state.reduxPersistedReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if(bookItems.length == 0) return (
        <div className="flex flex-row justify-center py-5 text-xl text-black">No Dentist Booking</div>
    )

    return (
        <>
        {
            bookItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={bookingItem.dentist}>
                    <div className="text-xl text-black">{bookingItem.name}</div>
                    <div className="text-xl text-black">Dentist: {bookingItem.dentist}</div>
                    <div className="text-xl text-black">Booking Date: {bookingItem.bookDate}</div>

                    <button className="block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2 shadow-sm"
                    id="Book Vaccine" name="Book Vaccine" onClick={()=> dispatch(removeBooking(bookingItem.name))}>
                        Remove Booking
                    </button>
                </div>
            ))
        }
        </>
    )
}
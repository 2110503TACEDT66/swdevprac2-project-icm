"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField} from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({onDateChange, onDentistChange, onNameChange, onLastnameChange, onIdChange}
    :{onDateChange:Function, onDentistChange:Function,onNameChange:Function,
    onLastnameChange:Function, onIdChange:Function}) {
    
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [id, setId] = useState('')

    const [bookDate, setBookingDate] = useState<Dayjs|null>(null)
    const [dentist, setDentist] = useState('Chula')
    return (
        <div className="bg-green-100 rounded-lg space-y-2
        w-fit px-20 py-5 flex flex-row justify-center grid gap-5">
            <TextField name="Name" label="Name" variant="standard"
            value={name} onChange={(e)=>{setName(e.target.value); onNameChange(e.target.value)}}/>
            <TextField name="Lastname" label="Lastname" variant="standard"
            value={lastname} onChange={(e)=>{setLastname(e.target.value); onLastnameChange(e.target.value)}}/>
            <TextField name="Citizen ID" label="Citizen ID" variant="standard"
            value={id} onChange={(e)=>{setId(e.target.value); onIdChange(e.target.value)}}/>

            <Select variant="standard" name="dentist" id="dentist"
            value={dentist} onChange={(e)=>{setDentist(e.target.value); onDentistChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                <MenuItem value="Chula">Chulalongkorn Dentist</MenuItem>
                <MenuItem value="Rajavithi"> Rajavithi Dentist</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Dentist</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookDate}
                onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    );
}
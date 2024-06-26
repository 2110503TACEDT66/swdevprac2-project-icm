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
            <Select variant="standard" name="dentist" id="dentist"
            value={dentist} onChange={(e)=>{setDentist(e.target.value); onDentistChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                <MenuItem value="Hank Schrader">Hank Schrader</MenuItem>
                <MenuItem value="Saul Goodman">Saul Goodman</MenuItem>
                <MenuItem value="Walter White">Walter White</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookDate}
                onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    );
}
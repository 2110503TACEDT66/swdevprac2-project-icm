'use client'
import { useRef, useState, useEffect} from "react"

export default function Register() {
    const firstname = useRef("");
    const lastname = useRef("");
    const email = useRef("");
    const tel = useRef("");
    const password = useRef("");
    const confirmpassword = useRef("");

    const [errMsg, setErrMsg] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password.current !== confirmpassword.current) {
            setErrMsg(true);
            return;
        }
        setErrMsg(false);
    }

   

    return (
        <>
            <label className="text-lime-500 font-black text-5xl mb-8">Create your account</label>

            <div className="h-12 w-[80%] mb-6 border border-slate-500 font-sans divide-x divide-slate-500">
                <input required placeholder="First Name" type="text" className="h-[100%] w-[50%] p-2 text-black"
                onChange={(e)=>{firstname.current = e.target.value}}/>
                <input required placeholder="Last Name" type="text" className="h-full w-[50%] p-2 text-black"
                onChange={(e)=>{lastname.current = e.target.value}}/>
            </div>

            <input required className=" border border-slate-500 mb-6 p-2 font-sans w-[80%] h-12 text-black" placeholder="Tel" type="text"
            onChange={(e)=>{tel.current = e.target.value}}/>
                        <input required className=" border border-slate-500 mb-6 p-2 font-sans w-[80%] h-12 text-black" placeholder="Email" type="text"
            onChange={(e)=>{email.current = e.target.value}}/>
            
            <div className="h-12 w-[80%] mb-10 border border-slate-500 font-sans divide-x divide-slate-500">
                <input required placeholder="Password" type="password" className="h-[100%] w-[50%] p-2 text-black"
                onChange={(e)=>{password.current = e.target.value}}/>
                <input required placeholder="Confirm Password" type="password" className="h-full w-[50%] p-2 text-black"
                onChange={(e)=>{confirmpassword.current = e.target.value}}/>
            </div>

            <div className="w-[80%] h-auto flex items-center">
                
            <button type="submit" className="w-[45%] h-[100%] my-5 mx-[5%] text-xl text-slate-900 font-bold font-sans bg-lime-500 hover:bg-slate-800 hover:text-lime-400 rounded-2xl"
            onSubmit={()=>onSubmit}>Sign Up</button>
            
            {
                errMsg && <p className="text-red-700 text-sm mt-5 mx-5">the password doesn't not match.</p> 
            }
            
            </div>
        </>
    )
   
}
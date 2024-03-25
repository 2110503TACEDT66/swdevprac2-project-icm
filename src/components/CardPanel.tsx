'use client'
import { useReducer ,useState} from "react";
import Card from "./Card";
import Link from "next/link";
import {useRef, useEffect} from "react";
import getHospitals from "@/libs/getHospitals";

export default function CardPanel() {
    
    const [hospitalResponse, setHospitalResponse] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=> {
            const hospitals = await getHospitals()
            setHospitalResponse(hospitals)
        }
        fetchData()
    }, [])

    const inputRef = useRef<HTMLInputElement>(null)

    const compareReducer = (compareList:Map<string,number>, action:{type:string, hospitalName:string, newValue:number})=>{
        switch(action.type) {
            case 'add': {
                return new Map( compareList.set(action.hospitalName,action.newValue))
            }
            case 'remove': {
                compareList.delete(action.hospitalName)
                return new Map( compareList)
            }
            default: return compareList
        }

    }

    const [ compareList, dispatchCompare] = useReducer(compareReducer,new Map<string,number>().
    set('Chulalongkorn Hospital Rating : ',5).set('Rajavithi Hospital Rating : ',5).set('Thammasat University Hospital Rating : ',5))

    /**
     *  Mock Data for test
     
    const mockHospital = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]
    */
   if(!hospitalResponse) return (<p className="text-black">Hospital Panel is Loading ...</p>)

    return (
        <div>
            <div style={{margin:"20px", display: "flex",
            flexDirection:"row", alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    // hospitalResponse.map((hospitalItem:HospitalItem)=>(
                    //     <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                    //     <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}
                    //     onCompare={ (hospital:string, rating:number)=>dispatchCompare(
                    //     {type:'add', hospitalName:hospital+" Rating : ", newValue:rating})}/>
                    //     </Link>
                    // ))
                }
            </div>
            <div className="w-full text-xl font-medium text-black">Hospital List: {compareList.size}</div>
            { Array.from(compareList).map( (hospital)=><div data-testid={hospital[0].substring(0,hospital[0].length-10)} key={hospital[0]} className="text-black" 
            onClick={()=>dispatchCompare({type:'remove',hospitalName:hospital[0],newValue:0})}>{hospital}</div>)}

            <input type="text" placeholder="Please fill" className="block text-grey-900 text-sm rounded-lg
            p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            focus:outline-none focus:bg-purple-200 focus:ring-2" 
            ref={inputRef}/>
            <button className="block rounded-md bg-lime-400 hover:bg-lime-600 px-3 py-2 shadow-sm"
             onClick={()=>{if(inputRef.current!=null) inputRef.current.focus()}}>
                Focus Input
            </button>
        </div>
    );
}
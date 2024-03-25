import { ClassNames } from "@emotion/react";
import Card from "./Card";
import Link from "next/link";
import { HospitalJson } from "../../interface";
import { HospitalItem } from "../../interface";

export default async function HospitalCatalog({hospitalsJson} : {hospitalsJson:Promise<HospitalJson>}) {
    const hospitalJsonReady = await hospitalsJson
    return(
        <div className="text-black">
        Explore {hospitalJsonReady.count} hospitals in our catalog
        <div style={{margin:"20px", display: "flex",
            flexDirection:"row", alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    hospitalJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </div>
    )

}
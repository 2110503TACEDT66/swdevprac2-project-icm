import { ClassNames } from "@emotion/react";
import Card from "./Card";
import Link from "next/link";
import { DentistJson } from "../../interface";
import { DentistItem } from "../../interface";

export default async function DentistCatalog({dentistsJson} : {dentistsJson:Promise<DentistJson>}) {
    const dentistJsonReady = await dentistsJson
    return(
        <div className="text-black">
        Explore {dentistJsonReady.count} dentists in our catalog
        <div style={{margin:"20px", display: "flex",
            flexDirection:"row", alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    dentistJsonReady.data.map((dentistItem:DentistItem)=>(
                        <Link href={`/dentist/${dentistItem.id}`} className="w-1/5">
                        <Card dentistName={dentistItem.name} imgSrc={`/img/${dentistItem.picture}`}/>
                        </Link>
                    ))
                }
        </div>
        </div>
    )

}
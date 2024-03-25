import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function Card( { hospitalName, imgSrc, onCompare}
    :{ hospitalName:string, imgSrc:string, onCompare?:Function}){

    function onHospitalSelected() {
        alert("You Select " + hospitalName)
    }
    const hospitalAndRate = hospitalName + " Rating";
    //const [value, setValue] = React.useState<number | null>(5);

    return (
        <InteractiveCard contentName={ hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Card'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>{hospitalName}</div>
            {
                onCompare? <Rating
                id={hospitalAndRate}
                name={hospitalAndRate}
                data-testid={hospitalAndRate}
                value={5}
                onChange={(event, newValue) => {
                    //setValue(newValue);
                    onCompare(hospitalName,newValue);
                }}
                onClick={(event)=> {
                    event.stopPropagation();
                }}
                /> : ''
            }
        </InteractiveCard>
    );
}
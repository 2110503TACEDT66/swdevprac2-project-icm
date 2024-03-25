import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function Card( { dentistName, imgSrc, onCompare}
    :{ dentistName:string, imgSrc:string, onCompare?:Function}){

    function onDentistSelected() {
        alert("You Select " + dentistName)
    }
    const dentistAndRate = dentistName + " Rating";
    //const [value, setValue] = React.useState<number | null>(5);

    return (
        <InteractiveCard contentName={ dentistName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Card'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>{dentistName}</div>
            {
                onCompare? <Rating
                id={dentistAndRate}
                name={dentistAndRate}
                data-testid={dentistAndRate}
                value={5}
                onChange={(event, newValue) => {
                    //setValue(newValue);
                    onCompare(dentistName,newValue);
                }}
                onClick={(event)=> {
                    event.stopPropagation();
                }}
                /> : ''
            }
        </InteractiveCard>
    );
}
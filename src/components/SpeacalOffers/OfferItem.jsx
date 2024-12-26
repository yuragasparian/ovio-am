import React from 'react'
import Button from './../Button';

export default function OfferItem({image, title, text}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='h-[34rem] m-5 rounded-3xl bg-cover bg-center brightness-75 cursor-grab'>
        <div className='p-7 absolute bottom-0 text-white h-1/2 flex flex-col justify-between items-start'>
            <h2 className='text-2xl font-bold my-4' >{title}</h2>
            <p className='text-base font-bold'>{text}</p>
            <Button size="large" color="violet">Իմացի՛ր ավելին</Button>
        </div>
    </div>
  )
}

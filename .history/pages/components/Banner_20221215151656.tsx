import image from 'next/image'
import React from 'react'
import { Url } from 'url'

type Props = {
    img?: string;
    topic?:string;
    summary?:string;
  }

function Banner({img, topic, summary}:Props) {
  return (
    <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill transition ease-out-in delay-150  hover:-translate-y-1  hover:scale-110" style={{backgroundImage: 'Url('+`${img}`+')'}}>
       <div className="md:w-1/2 text-yellow-300">
        <p className="font-bold text-sm uppercase">CIS SPOT</p>
        <p className="text-3xl font-bold">{topic}</p>
        <p className="text-2xl mb-10 leading-none">{summary}</p>
       
        </div>  
    </div>
  )
}

export default Banner
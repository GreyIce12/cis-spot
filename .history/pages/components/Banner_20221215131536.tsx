import image from 'next/image'
import React from 'react'
import { Url } from 'url'

type Props = {
    img?: string;
  }

function Banner({img}:Props) {
  return (
    <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{backgroundImage: 'Url('+`${img}`+')'}}>
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">TECH INNOVATIONS</p>
        <p className="text-2xl mb-10 leading-none">The place where your mind over flows with new streams of Technology</p>
       
        </div>  
    </div>
  )
}

export default Banner
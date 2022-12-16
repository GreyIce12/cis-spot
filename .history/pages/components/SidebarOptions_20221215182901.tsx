import React from 'react'

function SidebarOptions({title, Icon}:{title: string , Icon: any}) {
  return (

    
    <div className="flex text-lg  hover:bg-blue-100 rounded hover:text-blue-600  m-5 items-center p-1 cursor-pointer text-blue-1000" >
      <Icon className="text-gray-500 hover:text-blue-600"/>
      <h5 className="mx-4 font-sans" >{title}</h5>
    </div>
  )
}

export default SidebarOptions
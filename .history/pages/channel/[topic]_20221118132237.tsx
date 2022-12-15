import { useRouter } from 'next/router'
import React from 'react'

function Channel() {

    const {query:{topic},}  = useRouter()
  return (
    <div>[topic]</div>
  )
}

export default Channel
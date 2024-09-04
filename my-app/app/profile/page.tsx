import {currentUser} from "@clerk/nextjs/server"
import React from 'react'

export default async function Profile() {
    const userInfo = await currentUser();
    
  return (
    <div>page</div>
  )
}

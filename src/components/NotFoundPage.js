import React from 'react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className='notfoundpage my-20 '>
      
      <p className='p-4   my-4 '>
           Coming Soon
        </p>
         <Link className='yellow ' to='/'>click me to go back</Link>
    </div>
  )
}

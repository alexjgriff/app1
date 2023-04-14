import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
        
        <Link href={address} className='mx-4 lg:mx-6 hover:text-green-400'>
            <Icon className='text-2x1 lg:hidden mx-4'/>
            <p className='hidden sm:inline my-2 text-sm'> {title} </p>
        </Link>

    </div>
  )
}

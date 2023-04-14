import React from 'react';
import MenuItem from './Menuitem';
import {AiFillHome} from 'react-icons/ai';
import {AiFillInfoCircle} from 'react-icons/ai';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        
        <div className='flex justify-between mx-2 max-w-6x1 sm:mx-auto items-center py-6'>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}></MenuItem>
            <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle}></MenuItem>
            
            <div className='flex'>
                <Link href='/'>
                    <h2 className='text-2x1 '>
                        <span className='font-bold bg-green-400 py-1 px-2 rounded-lg'>Big Curly Boys</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

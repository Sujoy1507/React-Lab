import React from 'react'
import {ArrowUpRight}  from 'lucide-react'

const NavRight = () => {
  return (
    <div>
        <ul className=' flex gap-7 items-center justify-center'>
            <li>Career</li>
            <li className='flex gap-3 rounded-4xl border-2 px-2 py-1 border-orange-500'>
                <p>Contact Us</p>
                <ArrowUpRight />
            </li>
        </ul>
    </div>
  )
}

export default NavRight
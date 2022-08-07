import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full absolute flex items-center justify-between p-4 md:px-16'>
        <div className='flex items-center space-x-2'>
            <Image src='https://ksets.netlify.app/play/logo.svg' alt='' height={40} width={40}/>
            <h3>Sound Wave</h3>
        </div>

        <div className='flex items-center space-x-2 md:space-x-8'>
            <h3>Discover</h3>
            <h3>Join</h3>
        </div>
    </div>
  )
}

export default Header
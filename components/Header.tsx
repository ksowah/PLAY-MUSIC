/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { sessionState, tokenState } from '../atoms/userAtom'
import axios from '../utils/axios'

const Header = () => {

  const [session, setSession] = useRecoilState<any>(sessionState)
  const [dropDown, setDropDown] = useState(false)
  const [focus, setFocus] = useState(false)
  const [token, setToken] = useRecoilState(tokenState)

  const logOut = async () => {
    try {
        await axios({
        url: "logout",
        method: "GET",
      })

      setToken("")
      setSession(null)
      localStorage.setItem("session", "inactive")
      
    } catch (error) {
      console.log(error)
      
    }
  }

  const profileBadge = () => {
    setDropDown(!dropDown)
    setFocus(!focus)

    console.log(session)
    
  }


  return (
    <div className='w-full absolute flex items-center justify-between p-4 md:px-16'>
        <div className='flex items-center space-x-2'>
            <Image src='https://ksets.netlify.app/play/logo.svg' alt='' height={40} width={40}/>
            <h3>Sound Wave</h3>
        </div>

        <div className='flex items-center space-x-2 md:space-x-8'>
           <Link href={"/discover"}><h3 className='cursor-pointer'>Discover</h3></Link>
            <h3 className='cursor-pointer'>{session ? "Play" : "Join"}</h3>


          {session && (
            <div className='relative'>
                <div onClick={profileBadge} className={`flex items-center space-x-2 cursor-pointer ${focus && "border-[3px] border-white"} border-[3px] border-transparent px-3 py-2`}>
                  <div className='h-11 w-11 bg-cover bg-center rounded-full' style={{backgroundImage: `url(${session.image})`}}></div>
                  {/* <img src={session.image} className="h-11" alt="profile"/> */}
                  <div className='text-[14px] text-gray-300'>
                    <p className='font-bold text-gray-50'>{session?.name}</p>
                    <p>{session.email}</p>
                  </div>
                </div>

                {dropDown && (
                <div className='absolute w-full bg-gray-50 mt-2 text-[14px]'>
                    <div className='px-4 py-2 flex-1 bg-gray-200 cursor-pointer text-gray-600'>
                    <p>View profile</p>
                    </div>
                    <div onClick={logOut} className="px-4 py-2 flex-1 cursor-pointer  text-[#437db4]">
                    <p>Logout</p>
                    </div>
                </div>
                )}
            </div>
            )}


        </div>
    </div>
  )
}

export default Header
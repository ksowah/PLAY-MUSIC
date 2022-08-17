/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { sessionState, tokenState } from "../atoms/userAtom"
import axios from "../utils/axios"


const SectionThree = () => {

  const [newUser, setNewUser] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useRecoilState(tokenState)
  const [session, setSession] = useRecoilState(sessionState)



// Register users
  const Register = async (e: any) => {
    e.preventDefault()

    try {
      const {data} = await axios({
        url: "users",
        method: "POST",
        data: {
          name,
          email,
          password
        }
      })
      console.log(data)
      setSession(data.user)
      setToken(data.user.token)
      localStorage.setItem("session", "active")

    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }


  // Log users in
  const Login = async (e: any) => {
    e.preventDefault()

    try {
      const {data} = await axios({
        url: "/users/login",
        method: "POST",
        data: {
          email,
          password
        },
      })
      console.log(data)
      setSession(data)
      setToken(data.token)
      localStorage.setItem("session", "active")
      
    } catch (error: any) {
      console.log(error.response.data.message)
      
    }
  }

  // get all the user
  const getAllUsers = async () => {
    try {
      const {data} = await axios({
        url: "users",
        method: "GET",
        headers: {
          Authorization : `Bearer ${token}`
        }
      })

      
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }



  return (
    <div className="h-screen relative flex bg-[#2F303A]">
      <div className="flex-1 flex items-center">
        <h1 className="text-[4rem] font-bold ml-6 md:ml-16">Join the <span className="text-[#BC3A80]">fun</span></h1>
      </div>

      <div className="flex-1 flex items-center justify-center">

        <form className="w-[25rem] bg-black-rgba p-7" onSubmit={(e) => newUser? Register(e) : Login(e)}>
          {newUser && (
            <label htmlFor="name" className="flex flex-col">
              Name:
              <input type="text" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setName(e.target.value)}/>
            </label>
          )}

            <label htmlFor="email" className="flex flex-col">
              Email:
              <input type="email" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label htmlFor="password" className="flex flex-col">
              Password:
              <input type="password" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button className="bg-[#1762A7] py-1 rounded w-full mt-4" onClick={(e) => newUser? Register(e) : Login(e)}>{newUser ? "Sign up": "Login"}</button>
            {
              newUser ? (
                <p className="text-center text-gray-300 mt-2">Already have an account? <span onClick={() => setNewUser(false)} className="underline cursor-pointer hover:text-[#7ca6ce]" >Login here</span></p>
              ) : (
                <p className="text-center text-gray-300 mt-2">New here? <span onClick={() => setNewUser(true)} className="underline cursor-pointer hover:text-[#7ca6ce]" >Register now</span></p>
              )
            }
        </form>

      </div>

    </div>
  )
}

export default SectionThree
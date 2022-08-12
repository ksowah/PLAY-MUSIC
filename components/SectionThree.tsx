import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { userState } from "../atoms/userAtom"


const SectionThree = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  const [user, setUser] = useRecoilState(userState)

  // const handleToken = () => {
  //   axios.interceptors.response.use(
  //     async (config: AxiosRequestConfig) => {
  //       if (config.headers === undefined) {
  //         config.headers = {};
  //       }
  //      config.headers.authorization = `Bearer ${user}`
  //       return config 
  //     },

  //     error => {
  //       return Promise.reject(error)
  //     }
  //   )
  // }

  const Register = async (e: any) => {
    e.preventDefault()

    try {
      const {data} = await axios.post("http://localhost:8000/users", {
        name,
        email,
        password
      })
      console.log(data)
      setUser(data.user)
      setToken(data.user.token)
      alert("User created")

    } catch (error: any) {
      console.log(error)
    }
  }

  const Login = async (e: any) => {
    e.preventDefault()

    try {
      const {data} = await axios.post("http://localhost:8000/users/login", {
        email,
        password
      })
      console.log(data)
      setUser(data)
      setToken(data.token)
      alert("User logged in")
      
    } catch (error) {
      console.log(error)
      
    }
  }

  const getAllUsers = async () => {
    try {
      const {data} = await axios.get("http://localhost:8000/users", {
        headers: {
          Authorization : `Bearer ${token}`
        },
      })
      console.log(data)
      alert("All users")
      
    } catch (error: any) {
      console.log(error.message)
    }
  }

  


  return (
    <div className="h-screen relative flex bg-[#2F303A]">
      <div className="flex-1 flex items-center">
        <h1 className="text-[4rem] font-bold ml-6 md:ml-16">Join the <span className="text-[#BC3A80]">fun</span></h1>
      </div>

      <div className="flex-1 flex items-center justify-center">

        <form className="h-[24rem] w-[25rem] bg-black-rgba p-12" onSubmit={Login}>
            <label htmlFor="name" className="flex flex-col">
              Name:
              <input type="text" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setName(e.target.value)}/>
            </label>

            <label htmlFor="email" className="flex flex-col">
              Email:
              <input type="email" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label htmlFor="password" className="flex flex-col">
              Password:
              <input type="password" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7]" onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button className="bg-[#1762A7] py-1 rounded w-full mt-4" onClick={Login}>Join Now</button>
        </form>

        {
          user && <button onClick={getAllUsers}>Get all users</button>
        }

      </div>
    </div>
  )
}

export default SectionThree
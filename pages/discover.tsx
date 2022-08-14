/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import { useRouter } from "next/router";
import { BiMenuAltRight } from 'react-icons/bi';

const Discover = () => {

    const router = useRouter()

  return (
    <div className="min-h-screen bg-[#030303] text-gray-50">
         <Head>
        <title>Discover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 md:px-16 py-14">
            <div className="flex items-center space-x-6">
                <p className="font-medium">TSIB</p>
                <p className="text-xs text-gray-600">en</p>
            </div>
            <p className="font-medium">POPULAR</p>
            <BiMenuAltRight className="text-[1.5rem] cursor-pointer"/>
        </div>

        {/* CARDS */}
        <div className="relative space-y-32 pb-24">
            <div className="m-8 md:m-28 md:mx-44">
                <img className="cursor-pointer" onClick={() => router.push("/category/evolve")} src="https://ksets.netlify.app/play/evolve.svg" alt="evolve"/>
            </div>

            <div className="absolute px-12">
                <img src="https://ksets.netlify.app/play/bottom-menu.svg" alt="evolve"/>
            </div>

            <div className="m-8 md:m-28 md:mx-44">
                <img className="cursor-pointer" onClick={() => router.push({
                    pathname: "/category/cybergirl",
                    query: {image: "https://ksets.netlify.app/play/Cybergrl.svg"}
                })} 
                src="https://ksets.netlify.app/play/Cybergrl.svg" alt="Cybergirl"/>
            </div>

            <div className=" m-8 md:m-28 md:mx-44">
                <img className="cursor-pointer" onClick={() => router.push({
                    pathname: "/category/when-we-all",
                    query: {image: "https://ksets.netlify.app/play/when-we-all.svg"}
            })} src="https://ksets.netlify.app/play/when-we-all.svg" alt="when we all"/>
            </div>

            <div className=" m-8 md:m-28 md:mx-44">
                <img className="cursor-pointer" onClick={() => router.push("/category/lover")} src="https://ksets.netlify.app/play/lover.svg" alt="lover"/>
            </div>

            <div className=" m-8 md:m-28 md:mx-44">
                <img className="cursor-pointer" onClick={() => router.push("/category/cyberpunk")} src="https://ksets.netlify.app/play/cyberpunk.svg" alt="cyberpunk"/>
            </div>
        </div>

    </div>
  )
}

export default Discover
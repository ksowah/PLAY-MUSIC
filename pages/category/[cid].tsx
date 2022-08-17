/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PopOver from "../../components/PopOver";
import Head from "next/head";
import { useRouter } from "next/router";
import AudioControl from "../../components/AudioControl";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { NextPage } from "next";
import { useRecoilState } from "recoil";		
import { sessionState, tokenState } from "../../atoms/userAtom";


const Category: NextPage = () => {
	const router = useRouter();
	const [data, setData] = useState([])
	const [title, setTitle] = useState("")
	const [artist, setArtist] = useState("")

	const [token, setToken] = useRecoilState(tokenState)
  	const [session, setSession] = useRecoilState(sessionState)

	const { image } = router.query;

	const getSongs = async () => {		
		try {
			console.log(session)
			
				const { data } = await axios({
					url: "songs",
					method: "GET",
					headers: {
						Authorization : `Bearer ${token}`
					  }
				})
				setData(data)

			
		} catch (error) {
			console.log(error);
			
		}
	}

	const refreshToken = async () => {
		try {
		  const { data } = await axios({
			url: "refresh",
			method: "GET",
		  })
		  
		  setToken(data.token)
		  setSession(data.user)		  
		  
		} catch (error: any) {
		  console.log(error.response.data)      
		}
	  }
	
	
	  useEffect(() => {
		refreshToken()
		getSongs()
		if (localStorage.getItem("session") === "active") {
		  setInterval( refreshToken, 4 * 60 * 1000) // every 4 mins
		}
	  }, [])
	  
	

	return (
		<div className="min-h-screen bg-[#030303] text-gray-50">
			<Head>
				<title>Discover</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="py-[4rem] px-[1rem] md:px-[6rem]">
				<p className="font-medium">TSIB</p>
				<div className="m-8 md:m-28 md:mx-44">
					<img src={image?.toString()} alt="cover" />
				</div>

				<h1 className="text-center font-medium my-12">PRODUCTIVE TEAM</h1>
				<PopOver />
			</div>

			<div>
				{
					data.map((item: any, idx: any) => (
						<AudioControl key={idx} artist={item.artist} song={item.track} title={item.title} />
					))
				}
			</div>
		</div>
	);
};

export default Category;


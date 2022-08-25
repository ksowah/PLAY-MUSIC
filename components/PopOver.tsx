/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Fragment, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sessionState, tokenState, tracks } from "../atoms/userAtom"
import { storage } from "../firebase";
import axios from "../utils/axios";

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);
	const [selectedMusicImage, setSelectedMusicImage] = useState<any>(null);
	const [selectedSong, setSelectedSong] = useState<any>(null);
	const [title, setTitle] = useState("")
	const [artist, setArtist] = useState("")
	const [addedTracks, setAddedTracks] = useRecoilState(tracks)
	const musicImageRef: any = useRef(null);
	const songRef: any = useRef(null);
	const session: any = useRecoilValue(sessionState)
	const token = useRecoilValue(tokenState)

	const id = new Date().getTime()

	const coverImage = "/assets/disc.png";

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const getImage = (e: any) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent: any) => {
			setSelectedMusicImage(readerEvent.target.result);
		};
	};

	const getSong = (e: any) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent: any) => {
			setSelectedSong(readerEvent.target.result);
		};
	};

	
	const createTrack = async () => {

		let tracks: any = []

		let image: string = ""
		let trackUrl: string = ""

		try {
			const imageRef = ref(storage, `song/${id}/image`)
			const trackRef = ref(storage, `track/${id}/song`);

			if (selectedSong) {
				await uploadString(trackRef, selectedSong, "data_url").then(async () => {
					const downloadURL: any = await getDownloadURL(trackRef);
					trackUrl = downloadURL
				});
			}

			if (selectedMusicImage) {
				await uploadString(imageRef, selectedMusicImage, "data_url").then(async () => {
					const downloadURL: any = await getDownloadURL(imageRef)
					image = downloadURL
				})
			}


			if(selectedSong && selectedMusicImage){
				await axios({
				   url: "songs",
				   method: "POST",
				   data: {
					   title,
					   artist,
					   image,
					   track: trackUrl,
					   user: session?.email,
				   },
				   headers: {
					   Authorization : `Bearer ${token}`
					 }
			   })
			   .then((res) => {
				   console.log(res?.data)
				   tracks.push({
					   title,
					   artist,
					   image,
					   track: trackUrl,
					   user: session?.email,
				   })
				   setAddedTracks(addedTracks.concat(tracks).reverse())
			   })
			}

	
			setIsOpen(false)
			setSelectedMusicImage(null)
			setSelectedSong(null)
			
		} catch (error) {
			console.log(error)
			
		}
		
	}
	
	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center">
				<div
					onClick={openModal}
					className="fixed bottom-10 right-16 text-[6rem] font-medium flex items-center justify-center rounded-full text-gray-50 cursor-pointer"
				>
					{" "}
					+{" "}
				</div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="transform overflow-hidden rounded-2xl bg-gray-50 align-middle shadow-xl transition-all">
									<div className="h-[25rem] w-[35rem] py-6">
										<div className="p-2">
											<p className="text-xl font-medium">Add Track</p>
										</div>

										<div className="flex h-[75%]">
											<div className="flex-1 flex items-center justify-center">
												<div className="h-[13rem] w-[13rem] rounded-lg overflow-hidden">
													<img
														src={
															!selectedMusicImage
																? coverImage
																: selectedMusicImage
														}
														alt="song"
													/>
												</div>
											</div>

											<div className="flex-1 flex items-center justify-center">
												<div className="border-t-2  border-gray-800 w-[15rem] mr-4 flex flex-col items-start">
													<input
														type="text"
														placeholder="song title"
														className="outline-none mb-2 mt-2 w-full p-1 px-2 border-b border-gray-400 bg-gray-100"
														onChange={(e) => setTitle(e.target.value)}
													/>
													<input
														type="text"
														placeholder="artist name"
														className="outline-none mb-2 w-full p-1 px-2 border-b border-gray-400 bg-gray-100"
														onChange={(e) => setArtist(e.target.value)}
													/>

													<div className="flex items-center space-x-2">
														<button
															onClick={() => musicImageRef.current.click()}
															className="w-[6rem] mt-2 text-gray-900 font-medium p-2 rounded-lg bg-gray-300"
														>
															add image
														</button>
														<input
															type="file"
															accept=".png, .jpeg, .tiff, .jpg"
															hidden
															onChange={getImage}
															ref={musicImageRef}
														/>

														<button
															onClick={() => songRef.current.click()}
															className="w-[6rem] mt-2 text-gray-50 font-medium p-2 rounded-lg bg-gray-900"
														>
															add song
														</button>
														<input
															type="file"
															accept="audio/*"
															hidden
															onChange={getSong}
															ref={songRef}
															className="mb-2 w-full p-1 px-2 border-b border-gray-400 bg-gray-100"
														/>
													</div>
												</div>
											</div>
										</div>

										<button onClick={createTrack} className="w-[16rem] font-medium text-gray-50 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 focus:bg-blue-600">
											{" "}
											Add Track{" "}
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

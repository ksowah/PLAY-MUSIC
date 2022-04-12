/* eslint-disable @next/next/no-img-element */

const SectionOne = () => {

  return (
    <>
    <div className="h-screen flex bg-[#2F303A] bg-cover" style={{backgroundImage: `url(https://ksets.netlify.app/play/bg-circles.svg)` }}>
        <div className="h-full flex-1 ">
            <img src={"https://ksets.netlify.app/play/woman.svg"} 
                className="h-[30rem] absolute bottom-0 left-6 md:left-20" alt="woman"
            />
        </div>

        <div className="h-full  flex-1 flex flex-col text-start justify-center">
            <h1 className="text-5xl mb-8">Fell The Music</h1>
            <h2 className="text-lg mb-8" >Stream over 20 thousand songs with one click</h2>
            <button className="self-start mt-12 bg-[#1762A7] px-4 py-1.5 rounded">Join Now</button>
        </div>

    </div>
        <div className="h-28 absolute bottom-0 bg-gradient-to-b from-dark-rgba to-very-dark-rgba bg-transparent w-full" ></div>
        </>
  )
}

export default SectionOne
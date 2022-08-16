/* eslint-disable @next/next/no-img-element */



interface Props {
  image: string,
  title: string
}

const Badge = ({image, title}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 h-16 w-16 bg-black-rgba">
      <img src={image} className="h-6" alt=""/>
      <p className="text-xs">{title}</p>
    </div>
  )
}


const SectionTwo = () => {
  return (
    <div className="h-screen relative flex bg-[#2F303A]">
      {/* <div className="h-24 w-full absolute top-0 bg-gradient-to-t from-dark-rgba to-very-dark-rgba bg-transparent"></div> */}
        
        <div className="flex-1 flex flex-col items-start mx-6 md:mx-24 justify-center">
            <h1 className="text-5xl mb-16">Discover new music</h1>
            <div className="flex items-center space-x-4"> 
             <Badge image="/assets/play/microphone.svg" title="Charts"/>
             <Badge image="/assets/play/album.svg" title="Albums"/>
             <Badge image="/assets/play/more.svg" title="More"/>
            </div>
            <p className="text-2xl mt-8">
              By joining you can benefit by listening to the latest album released
            </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
            <div className="h-[20rem] w-[20rem]">

                <div className="flex h-1/2">
                    <div className="flex-1 bg-cover" style={{backgroundImage: `url(/assets/play/burner.jpg)`}}></div>
                    <div className="flex-1 bg-cover" style={{backgroundImage: `url(/assets/play/stormzy.jpg)`}}></div>
                </div>

                <div className="flex h-1/2">
                    <div className="flex-1 bg-cover" style={{backgroundImage: `url(/assets/play/drake.jpg)`}}></div>
                    <div className="flex-1 bg-cover bg-center" style={{backgroundImage: `url(/assets/play/kendrick.jpg)`}}></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SectionTwo
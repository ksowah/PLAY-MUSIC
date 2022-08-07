
const SectionThree = () => {
  return (
    <div className="h-screen relative flex bg-[#2F303A]">
      <div className="flex-1 flex items-center">
        <h1 className="text-[4rem] font-bold ml-6 md:ml-16">Join the <span className="text-[#BC3A80]">fun</span></h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <form className="h-[24rem] w-[25rem] bg-black-rgba p-12">
            <label htmlFor="name" className="flex flex-col">
              Name:
              <input type="text" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7] "/>
            </label>

            <label htmlFor="email" className="flex flex-col">
              Email:
              <input type="email" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7] "/>
            </label>

            <label htmlFor="password" className="flex flex-col">
              Password:
              <input type="password" className="my-3 rounded bg-transparent py-1 px-4 border outline-none border-[#1762A7] "/>
            </label>

            <button className="bg-[#1762A7] py-1 rounded w-full mt-4">Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default SectionThree
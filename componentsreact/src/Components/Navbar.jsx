

function Navbar() {
  return (
    <>
    <div className="flex flex-wrap justify-around bg-black h-16 flex-row w-screen py-1">
        <div className=" text-white py-3 text-2xl w-1/3  h-full">
         NAVBAR</div>
        <div className="w-1/3  h-full text-white  flex  flex-row  flex-wrap list-none gap-10 py-3 text-xl">
          <li>HOME</li>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
         <button className="bg-fuchsia-600 px-2 rounded-3xl ">LOGIN</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
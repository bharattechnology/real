import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-slate-900 fixed text-white w-full h-screen p-8 ">
     <div>
      <div className=" flex justify-center items-center gap-6 p-8 text-2xl md:text-5xl text-fuchsia-700">Real Group</div>
      <div className=" justify-center flex items-center p-4">Developed by</div>
      <div className=" flex justify-center p-2 items-center">
      
        <Image className=" " src={"/rajumudavatgroup.jpg"} alt="Raju Mudavat Group Logo" width={150} height={100} priority/>
      </div>
     </div>

        <footer className=" bottom-0 mb-0 pb-0 h-full px-2 text-sm justify-center items-center flex flex-col">&copy;2024 Banjara Technologies Pvt Ltd. All rights reserved.</footer>
     
    </div>
  )
}
    
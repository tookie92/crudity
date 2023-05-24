'use client';
import { FcWorkflow } from "react-icons/fc"
import Button from "../Button"
import { useRouter } from "next/navigation"


export default function Home() {
  const navigate = useRouter();
  return (
   <div className=' items-center h-full w-full flex'>
    <div className=' items-center flex w-full flex-col gap-4 '>
     <div className="flex flex-row gap-2 items-center">
      <FcWorkflow size={30}/>
     <h2 className='text-3xl text-gray-900 font-bold text-center'>
          Hello
      </h2>
     </div>
     <Button onClick={()=>{navigate.push("/homepage")}}>happy</Button>
    </div>
   </div>
  )
}

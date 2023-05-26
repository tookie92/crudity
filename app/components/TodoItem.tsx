'use client';


import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import {AiOutlineDelete} from "react-icons/ai"
import {CiRead} from "react-icons/ci"


type TodoItemProps ={
    id: string;
    title: string;
    complete: ConstrainBoolean;
    onClick:(id: string)=> Promise<Todo>;
    onUpdate?:(id: string)=> Promise<Todo>;

}



export default  function TodoItem({title,complete, id, onClick, onUpdate}: TodoItemProps) {
  const navigate = useRouter();
 
 

  return (
    <div className="bg-white shadow-md h-[300px] rounded-md p-6">
      
      <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div className="grid grid-cols-2 gap-2">
                    <CiRead onClick={()=>{navigate.push(`/homepage/todo/${id}`)}} size={24}/>
                   
                  <AiOutlineDelete onClick={e=>{
                    if (window.confirm(`Voulez vous effacez ${title}`)) {
                      onClick(id);
                    }
                    navigate.refresh();
                  }} size={24}/>
                </div>
              </div>
                <p className="text-gray-600">{complete? "complete": "not complete"}</p>
          </div>
      
    
  </div>
  )
}

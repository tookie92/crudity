import TodoForm from "@/app/components/TodoForm";
import { prisma } from "@/app/db";

function fetchWithId(mid: string){
    return prisma.todo.findUnique({
        where:{
            id: mid
        }
    })
}



export default async function TodoDetail({
    params,
  }: {
    params: { todoId: string };
  }) {

    const monTodo = await fetchWithId(params.todoId);
  return (
    <div className=" flex flex-col mt-9 p-5 h-[300px] shadow-md rounded-md mx-auto items-center justify-center">
        <TodoForm />
    </div>
  )
}

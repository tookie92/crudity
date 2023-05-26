import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { prisma } from "../db";

function fetchTodos(){
  return prisma.todo.findMany();
}
async function removeTodo(id:string) {
  "use server";
  const rep = await prisma.todo.delete({where:{id:id}})
  return rep;
}

export default async function HomePage() {
  const todos = await fetchTodos();

  
  // await prisma.todo.create({data:{title: "Premier", complete:false}})


    return ( <>
      <div className="flex flex-col gap-4 w-full ">
        <h2 className="text-3xl font-semibold">Creer un todo</h2>
           <TodoForm/>
            <div className="grid grid-cols-5 gap-3">
              {
                todos.map((todo)=>{
                  return (
                    <TodoItem key={todo.id} onClick={removeTodo}  {...todo}/>
                  )
                  
                })
              }
            </div>
          
      </div>
    </> );
}

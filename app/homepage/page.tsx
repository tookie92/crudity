import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { prisma } from "../db";

function fetchTodos(){
  return prisma.todo.findMany();
}

export default async function HomePage() {
  const todos = await fetchTodos();
  // await prisma.todo.create({data:{title: "Premier", complete:false}})


    return ( <>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Creer un todo</h2>
           <TodoForm/>
            <ul className=" flex flex-col gap-4">
              {
                todos.map((todo)=>{
                  return <TodoItem key={todo.id} {...todo}/>
                })
              }
            </ul>
          
      </div>
    </> );
}

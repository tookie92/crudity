type TodoItemProps ={
    id: string;
    title: string;
    complete: ConstrainBoolean
}

export default function TodoItem({title,complete, id}: TodoItemProps) {
  return (
    <div className="flex items-center bg-sky-500 h-[100px] rounded-md px-2">
            <h2 className="text-white font-semibold text-xl">{title}</h2>
    </div>
  )
}

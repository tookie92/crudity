import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

interface IParams{
    todoId?: string
}

export async function DELETE(
    request:Request,
    {params}:{params:IParams}
    ) {

        try {
            const {todoId}= params;

            const catchTodo = await prisma.todo.findUnique({
                where:{
                    id: todoId,
                }
            });

            if(!catchTodo){
                return new NextResponse("Invalid Email", )
            }
            const deleteTodo = await prisma.todo.delete({
                where:{
                    id: todoId,
                }
            })
            

            return NextResponse.json(deleteTodo);
        } catch (error) {
            return NextResponse.json(null)
        }
    
} 
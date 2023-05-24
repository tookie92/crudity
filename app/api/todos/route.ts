import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
){
    try {
        const body = await request.json();
        const{
           title,
           complete
        }=body;
        
        if (!title) {
           return new NextResponse('Missing Info',{status: 400})
        }
       
        const todo = await prisma.todo.create({
           data:{
               title,
               complete
           }
        })
       
        return NextResponse.json(todo);
        
    } catch (error: any) {
        console.log(error, 'Reg Error');
        return new NextResponse('Internal Error', {status:500})
    }

}
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../utils/prisma";

const data: any = []

export function GET(){
    return NextResponse.json({data})
}

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        await prisma.user.create({    
        data: {
            name: body.name,
            email: body.email
        }
        })
        return NextResponse.json({body})
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
          { error: "An error occurred while creating the user" },
          { status: 500 }
        );
      }
    
    
}
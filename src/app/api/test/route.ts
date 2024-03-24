
import db from "@/lib/prisma";
import { ProjectSchema } from '@/types/project';
import { extractBody } from "@/lib/extractBody";
import { NextRequest, NextResponse } from 'next/server';


export async function GET()  : Promise<Response>{
    const projects = await db.project.findMany();
    return new Response(JSON.stringify(projects), { status: 200 });
}

export async function POST(req: NextRequest) : Promise<Response> {
    return createProject();
}


    const createProject = () => {
        const newProject = db.project.create({
            data: {
                title: "test",
                duration_start: '2024-03-24T07:35:21.671Z',
                duration_end:  '2024-03-24T07:35:21.671Z',
                total_hours: 80,
            }
        });
        if (newProject != null) {
            return new Response(JSON.stringify(newProject), { status: 200 });
        }
        return new Response(`bad request ${newProject}`, { status: 400 });
    }


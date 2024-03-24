import { NextRequest, NextResponse } from 'next/server';
import { ProjectSchema } from '@/types/project';
import { IDSchema } from '@/types/id';
// import { Project } from '@prisma/client';
import { extractBody } from "@/lib/extractBody";
import db from '@/lib/prisma';

// プロジェクトの一覧が取得できる
export async function GET() : Promise<Response>{
    const projects = await db.project.findMany();
    return new Response(JSON.stringify(projects), { status: 200 });
}

// 新規プロジェクトの作成ができる
export async function POST(req: NextRequest) : Promise<Response> {
    const project  = await extractBody(req, ProjectSchema);
    if (project instanceof Response) {
        return project;
    }
    const newProject = await db.project.create({
        data: {
            title: project.title,
            duration_start: project.duration_start.toISOString(),
            duration_end: project.duration_end.toISOString(),
            total_hours: project.total_hours,
        }
    });
    if(newProject != null){
        return new Response(JSON.stringify(newProject), { status: 200 });
    }
    return new Response(`bad request ${newProject}`, { status: 400 });
}

// 既存プロジェクトの情報を編集できる

// プロジェクトを削除できる
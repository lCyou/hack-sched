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
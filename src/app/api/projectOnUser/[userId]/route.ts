import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/prisma';

type Params = {
    userId: number
  }

// プロジェクトの一覧が取得できる
export async function GET(req: NextRequest, context: {params: Params}) : Promise<Response>{
    const id = Number(context.params.userId);
    const projects = await db.project.findMany({
        select: {
            id: true,
            title: true,
            duration_start: true,
            duration_end: true,
        },
        where: {
            users: {
                some: {
                    userId: {in: [id]},
                },
            }
        },
    });
        return new Response(JSON.stringify(projects), { status: 200 });
}

import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/prisma';

type Params = {
    id: Number
  }

// プロジェクトについてが取得できる
export async function GET(req: NextRequest, context: {params: Params}) : Promise<Response>{
    const id = Number(context.params.id);
    console.log(id);
    // const projects = await db.projectOnUser.findMany({
    //     // idで取得するプロジェクトを指定
    //     where: {
    //         projectId: id,
    //     },
    //     select: {
    //         projectId: true,
    //         assignedBy: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 image: true,
    //             }
    //         },
            
    //     }
    // });
    const projects = await db.project.findFirst({
        where: {
            id: id,
        },
        include: {
            users: {
                select: {
                    userId: true,
                    user: {
                        select: {
                            name: true,
                            image: true,
                        }
                    }
                }
            }
        }});
    if (projects !=  null) {
        return new Response(JSON.stringify(projects), { status: 200 });
    }
    return new Response(`Not Found`, { status: 400 });
}

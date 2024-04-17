import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/prisma';

type Params = {
    name: string
  }

// プロジェクトの一覧が取得できる kore iranaikamo
export async function GET(req: NextRequest, context: {params: Params}) : Promise<Response>{
    const name = context.params.name;
    const userid = await db.user.findUnique({
        select: {
            id: true
        },
        where: {
            name: name
        },
    });
    if(userid == null){
        return new Response('non user', { status: 400 });
    }
        return new Response(JSON.stringify(userid), { status: 200 });
}
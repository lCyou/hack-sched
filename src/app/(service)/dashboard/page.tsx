'use client'
import { useSearchParams } from 'next/navigation'
import { Avatar, Button, Grid, GridItem, Input, Link } from "@yamada-ui/react"
import RemainDay from '@/components/dashboard/remainDay'

//最初にハッカソン情報を取得する
export default function DashboardPage ({ params }: { params: { id: number }}) {
    // const searchParams = useSearchParams()
    // const projectId = searchParams.get('id')
    // let project : any = {};
    // fetch(`/api/project/${projectId}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // }).then(async (res) => { 
    //     project = await res.json();
    // }).catch((error) => {  
    //     console.error('Error:', error);
    // });

    // console.log(project.title);
    const users = //project.users;
    [
        {
            "userId": 0,
            "user": {
                "name": "Kaoru Yamakawa",
                "image": "https://avatars.githubusercontent.com/u/87867174?v=4"
            }
        },
        {
            "userId": 1,
            "user": {
                "name": "lcyou",
                "image": "https://avatars.githubusercontent.com/u/164728198?v=4"
            }
        }
    ]
    return (
        <div className="p-6">
            <Grid
                w="full"
                templateColumns={{base:"repeat(4,1fr)",lg:"repeat(2, 1fr)"}}
                templateRows="repeat(3, 1fr)"
                gap="md"
            >
                <GridItem colSpan={2} w="full" minH="sm" rounded="md"
                    className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" >
                    <h1 className='text-4xl pt-3 px-3'>title</h1>
                    <p className='px-3'>discriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscription</p>

                    <h2 className='text-2xl pt-4 px-3'>upcoming meeting</h2>
                    <Input className='' variant="flushed" placeholder="meeting URL" />
                </GridItem>

                <GridItem colSpan={2} rowSpan={2}
                    w="full" minH="4xs" rounded="md"
                    className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
                        list ?
                        {/* userをリストで表示 */}
                        {users.map((user) => {
                            return (
                                <div key={user.userId} className='flex items-center'>
                                    <Avatar src={user.user.image} />
                                    <p>{user.user.name}</p>
                                </div>
                            )
                        })}
                </GridItem>

                <GridItem rowStart={2} rowEnd={2}
                    w="full" minH="4xs" rounded="md"
                    className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
                    <RemainDay />
                </GridItem>

                <GridItem colStart={2} colEnd={2} rowStart={2} rowEnd={2}
                    w="full" minH="4xs" rounded="md"
                    className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
                    <p>add ur sched</p>
                    <Link href={`/table?id=$1&user=0`}>
                    <Button >add</Button>
                    </Link>
                </GridItem>
            </Grid>
        </div>
    );
};
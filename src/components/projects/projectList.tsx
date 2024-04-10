'use client'
import React from "react";
import Link from "next/link";
import { Button, Card, CardHeader, CardBody, Heading } from "@yamada-ui/react"


const data = [
  {
    id: 1,
    title: "hivehack2023",
    duration_start: "2023/11/23",
    duration_end: "2023/11/24",
  },
  {
    id: 2,
    title: "技育CAMP vol.15",
    duration_start: "2024/02/25",
    duration_end: "2024/02/26",
  },
  {
    id: 3,
    title: "PRTIMES winter hackathon",
    duration_start: "2024/02/28",
    duration_end: "2024/03/01",
  },
  {
    id: 4,
    title: "hack U",
    duration_start: "2024/03/16",
    duration_end: "2024/03/17",
  },
  {
    id: 5,
    title: "giftee intern LINEbot",
    duration_start: "2024/01/31",
    duration_end: "2024/02/06",
  },
]; 

// type Data = {
//   id: number,
//   title: string,
//   duration_start: string,
//   duration_end: string,
// }

// async function Data(user: any) : Promise<Data[]| undefined>{
//   try {
//     const res = await fetch(`/api/user/${user.user.name}`)
//     const body = await res.json();
//     const resd = await fetch(`/api/projectOnUser/${body.id}`);
//     const data = await resd.json();
//     console.log('complete');
//     return data;
//   }catch(e) {
//     console.error(e);
//   }
// }
const formatDate = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric', month: 'numeric', day: 'numeric'
}).format;

const fetchProjects = async (user: any) => {
  const res = await fetch(`/api/user/${user.user.name}`)
  const body = await res.json();
  const resd = await fetch(`/api/projectOnUser/${body.id}`);
  const data = await resd.json();
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 max-sm:grid-cols-2">
        {data.map(({ id, title, duration_start, duration_end }
                : { id: number, title: string, duration_start: string, duration_end: string }) => (
            <Card maxW="md" variant="outline" key={id} className="m-4">
                <CardHeader>
                    <Heading size="md">{title}</Heading>
                </CardHeader>
                <CardBody>
                    <p>Duration: {formatDate(new Date(duration_start))} - {formatDate(new Date(duration_end))}</p>
                    <Link href={`/dashboard/${id}`}>
                        <Button colorScheme="primary" className="flex justify-end">View</Button>
                    </Link>
                </CardBody>
            </Card>
            
        ))}
        </div>
    );
  
};

const ProjectList = ({user}:{user: any}) => {
  if(user == null){
    return (
      <>fail user session</>
      );
  }
  return fetchProjects(user);
};

export default ProjectList;
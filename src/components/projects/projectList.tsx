'use client'
import React from "react";
import Link from "next/link";
import { Button, Card, CardHeader, CardBody, CardFooter, Heading } from "@yamada-ui/react"


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
            <Card maxW="md" variant="outline" key={id} className="m-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
                <CardHeader>
                    <Heading size="md">{title}</Heading>
                </CardHeader>
                <CardBody>
                    <p>Duration: {formatDate(new Date(duration_start))} - {formatDate(new Date(duration_end))}</p>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <Link href={`/dashboard?id=${id}`}>
                        <Button colorScheme="primary" className="">View</Button>
                    </Link>
                </CardFooter>
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
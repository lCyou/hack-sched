'use client'
import { Suspense } from 'react';
// import Loading from '@/components/loading';
import ProjectList from '@/components/projects/projectList';
import UserStatus from '@/components/projects/userStatus';
import PageLoading from '@/components/loading';
import { useSession } from "next-auth/react"

const UserPage = () => {
    const { data :session, status } = useSession();
    if (status === 'authenticated') {
        return (
            <>
            {/* <Button onClick={() => signIn()} /> */}
            <UserStatus user={session}/>
            <Suspense 
            fallback={<PageLoading/>}
            >
                <ProjectList user={session}/>
            </Suspense>
            </>
        );
    }
    return (
        <>
            <PageLoading />
        </>
    );
};

export default UserPage;
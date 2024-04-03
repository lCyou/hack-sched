
'use client'
import { Suspense } from 'react';
// import Loading from '@/components/loading';
import ProjectList from '@/components/projectList';
import UserStatus from '@/components/userStatus';
import { useSession } from "next-auth/react"



const UserPage = () => {
    const { data :session, status } = useSession();
    if (status === 'authenticated' && session) {
        return (
            <>
            {/* <Button onClick={() => signIn()} /> */}
            <UserStatus user={session}/>
            <Suspense 
            // fallback={<Loading/>}
            >
                <ProjectList/>
            </Suspense>
            </>
        );
    }
    return (<div>Loading...</div>);
};

export default UserPage;
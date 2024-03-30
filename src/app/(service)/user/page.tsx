
import { Suspense } from 'react';
// import Loading from '@/components/loading';
import ProjectList from '@/components/projectList';
import UserStatus from '@/components/userStatus';



const UserPage = () => {
    return (
        <>
        {/* <Button onClick={() => signIn()} /> */}
        <UserStatus/>
        <Suspense 
        // fallback={<Loading/>}
        >
            <ProjectList/>
        </Suspense>
        </>
    );
};

export default UserPage;
'use client'
import { Avatar, AvatarBadge } from "@yamada-ui/react"
import { useSession } from "next-auth/react"

const UserStatus = () => {
    const { data :session } = useSession();
    return (
        <div className="flex justify-center">
            <Avatar
                size="xl"
                name="?" //"yamada-ui"
                src={session?.user.image} //"https://avatars.githubusercontent.com/u/84060430?v=4"
            />
            <p className="flex items-center pl-5 text-4xl text-blue-950 ">{session ? session.user.name : "unknown"} Projects</p>

        </div>
    );
}

export default UserStatus;
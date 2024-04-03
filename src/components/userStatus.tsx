'use client'
import { Avatar, AvatarBadge } from "@yamada-ui/react"

const UserStatus = ({user}: {user: any}) => {
    console.log(user.user.id);
    return (
        <div className="flex justify-center pb-9">
            <Avatar
                size="xl"
                name="?" //"yamada-ui"
                src={user.user.image} //"https://avatars.githubusercontent.com/u/84060430?v=4"
            />
            <p className="flex items-center pl-5 text-4xl text-blue-950 ">{user.user.name} Projects</p>

        </div>
    );
}

export default UserStatus;
'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { Loading } from "@yamada-ui/react";
import { Button } from "@yamada-ui/react";
import { useEffect } from "react";

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <Button className='m-2 xl:mr-2' loadingIcon="dots"
      onClick={() => {
        session ? signOut(): signIn();
      }}>
        {session ? 'Logout' : 'Login'}
    </Button>
  );
}

export default AuthButton;

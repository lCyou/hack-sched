'use client';
import { signOut} from "next-auth/react";
import { Button } from "@yamada-ui/react";

const AuthButton = () => {
  function handleSignOut() {
    signOut();
    // window.location.href = '/';
  }
  return (
    <Button className='m-2 xl:mr-2' loadingIcon="dots"
      onClick={() => {
        handleSignOut()
      }}>
        log out
    </Button>
  );
}

export default AuthButton;

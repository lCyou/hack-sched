'use client'
import Image from "next/image";
import { Box, Heading, LinkBox, LinkOverlay} from "@yamada-ui/react";
import image from "@/../public/logo.png";
import AuthButton from "@/components/header/authButton";
import MButton from "@/components/header/menuButton";

const Header = () => {
  return (
    <Box className="sticky top-0 items-center w-screen flex justify-between h-30 backdrop-blur-2xl" p="5" rounded="md" color="black">
      <LinkBox className="flex justify-center items-center">
        <LinkOverlay href="/">
          <Image id="logo" src={image} 
            className="size-24 p-2 max-sm:hidden" alt="hack sched" />
        </LinkOverlay>
        <Heading size="xl">HackSched</Heading>
      </LinkBox>
      <nav>
        <MButton />
        <AuthButton />
      </nav>
    </Box>
  );
}

export default Header;

import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link
  } from "@yamada-ui/react"

const MButton = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                className="m-2 xl:mr-"
            >
                Project
            </MenuButton>

            <MenuList>
                <MenuItem >
                    <Link href="/new_project" className="w-full h-full">
                        <p>Create New</p>
                    </Link>
                </MenuItem>

                <MenuItem >
                    <Link href="/projects" className=" w-full h-full">
                        Your Projects
                    </Link>
                </MenuItem>

                <MenuItem >
                    <Link href="/test" className=" w-full h-full">
                        test
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MButton;
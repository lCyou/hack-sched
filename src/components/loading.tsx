import { Loading } from "@yamada-ui/react"

const PageLoading = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <Loading variant="grid" size="9xl" color="pink.500" />
        </div>
    );
};

export default PageLoading;
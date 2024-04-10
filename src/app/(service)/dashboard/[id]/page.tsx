import { Grid, GridItem } from "@yamada-ui/react"


//最初にハッカソン情報を取得する
const DashboardPage = () => {
    return (
        <Grid
            w="full"
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap="md"
            className=""
            >
            <GridItem colSpan={2} w="full" minH="sm" rounded="md" bg="primary" />

            <GridItem
                colSpan={2}
                rowSpan={2}
                w="full"
                minH="4xs"
                rounded="md"
                bg="secondary"
            />

            <GridItem
                rowStart={2}
                rowEnd={2}
                w="full"
                minH="4xs"
                rounded="md"
                bg="warning"
            />

            <GridItem
                colStart={2}
                colEnd={2}
                rowStart={2}
                rowEnd={2}
                w="full"
                minH="4xs"
                rounded="md"
                bg="danger"
            />
        </Grid>
    );
};
export default DashboardPage;
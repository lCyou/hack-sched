import { Grid, GridItem } from "@yamada-ui/react"


//最初にハッカソン情報を取得する
const DashboardPage = () => {
    return (
        <Grid
            w="full"
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap="md"
            >
            <GridItem colSpan={2} w="full" minH="sm" rounded="md" bg="primary" >
                aiueo
            </GridItem>

            <GridItem colSpan={2} rowSpan={2}
                w="full" minH="4xs" rounded="md" bg="secondary">
                aiueo
            </GridItem>

            <GridItem rowStart={2} rowEnd={2}
                w="full" minH="4xs" rounded="md" bg="warning">
                    aiueo
            </GridItem>

            <GridItem colStart={2} colEnd={2} rowStart={2} rowEnd={2}
                w="full" minH="4xs" rounded="md" bg="danger"
            >
                aiueo
            </GridItem>
        </Grid>
    );
};
export default DashboardPage;
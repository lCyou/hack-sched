import Image from "next/image";
import { Grid, GridItem, LinkBox, LinkOverlay } from "@yamada-ui/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
    <div className="h-screen">
      <div className="w-screen h-3/4 flex items-center justify-center text-white bg-gray-900">
        <div className="max-md:ml-7">
          <h1 className="text-8xl font-bold mt-9 mb-4 
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
          text-transparent bg-clip-text">Hack Sched</h1>
          <h1 className="text-4xl">is a tool </h1>
          <h1 className="text-4xl">for scheduling
          <span className="text-5xl font-semibold bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
          text-transparent bg-clip-text"> hackathons.</span>
          </h1>
          <div className="w-full flex items-center justify-center p-10">
            <LinkBox className="mt-5 rounded-xl bg-white">
              <LinkOverlay href="/user">
                <h1 className="text-black font-semibold text-lg py-4 px-6">Get Started</h1>
              </LinkOverlay>
            </LinkBox>
          </div>
        </div>
      </div>
      <h1 className="my-8 text-4xl font-semibold flex items-center justify-center"># Why hack Sched</h1>
      <Grid templateColumns="repeat(3, 1fr)" gap="md" p="md">
        <GridItem w="full" h="md" rounded="lg" bg="primary">
          <div className="m-4">
            <h1 className="text-4xl mb-5">Auto Schedule</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>a</p>
            <p>a</p>
          </div>
        </GridItem>
        <GridItem w="full" h="md" rounded="md" bg="border">
          <div className="m-4">
            <h1 className="text-4xl mb-5">protect your privacy</h1>
            aaaaaaaaaaaaaaaaaaaaaaaaaa
            <p>a</p>
            <p>a</p>
          </div>
        </GridItem>
        <GridItem w="full" h="md" rounded="md" bg="whiteAlpha.300">
          <div className="m-4">
            <h1 className="text-4xl mb-5">suitable for hackathon</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>a</p>
            <p>a</p>
          </div>
        </GridItem>
      </Grid>
    </div>
    </main>
  );
}

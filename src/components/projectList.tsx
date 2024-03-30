'use client'
import React, { useMemo } from "react";
import { Column, PagingTable } from "@yamada-ui/table";
import { Data } from "@tanstack/react-table"


const data = fetch("https://jsonplaceholder.typicode.com/posts").catch((error) => {
  console.error("Error:", error);
})

const ProjectList = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "ハッカソン名",
        accessorKey: "title",
      },
      {
        header: "KICK OFF",
        accessorKey: "duration_start",
      },
      {
        header: "CODE FREEZE",
        accessorKey: "suration_end",
      },
    ],
    [],
  )
    return (
        <>
          <PagingTable columns={columns} data={data} />
        </>
    );
};

export default ProjectList;
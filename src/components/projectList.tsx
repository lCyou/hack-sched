'use client'
import React, { useMemo } from "react";
import { Column, PagingTable } from "@yamada-ui/table";
import { RowData as Data } from "@yamada-ui/table";


const data = [
  {
    title: "hivehack2023",
    duration_start: "2023/11/23",
    duration_end: "2023/11/24",
  },
  {
    title: "技育CAMP vol.15",
    duration_start: "2024/02/25",
    duration_end: "2024/02/26",
  },
  {
    title: "PRTIMES winter hackathon",
    duration_start: "2024/02/28",
    duration_end: "2024/03/01",
  },
  {
    title: "hack U",
    duration_start: "2024/03/16",
    duration_end: "2024/03/17",
  },
  {
    title: "giftee intern LINEbot",
    duration_start: "2024/01/31",
    duration_end: "2024/02/06",
  },
]; 
// fetch("https://jsonplaceholder.typicode.com/posts").catch((error) => {
//   console.error("Error:", error);
// })

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
        accessorKey: "duration_end",
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
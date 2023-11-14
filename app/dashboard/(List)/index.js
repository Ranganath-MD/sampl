"use client";

import { List } from "./List";
import { useRouter, useParams } from "next/navigation";

export default async function RootList() {
  const params = useParams();
  const router = useRouter();
  const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

  if(!params.id){
    router.push(`/dashboard/users/${users[0].id}`)
  }

  return <List users={users} />
}


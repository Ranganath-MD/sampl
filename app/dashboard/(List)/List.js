"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { useParams } from "next/navigation";
import { getInitials } from "@/lib/getInitial";

export const List = ({ users }) => {
  const params = useParams();

  return (
    <ScrollArea className="h-[95vh]">
      {
        users?.map(user => {
          return (
            <Link href={`/dashboard/users/${user.id}`} key={user.id} className={`w-full flex align-middle p-3 hover:bg-secondary ${Number(params.id) === Number(user.id) ? 'bg-secondary': 'bg-none'}`}>
              <Avatar>
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </Link>
          )
        })
      }
    </ScrollArea>
  )
}

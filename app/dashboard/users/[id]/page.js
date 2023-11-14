import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area";
import { getInitials } from "@/lib/getInitial";

export default async function Details({ params }){
  const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json();
  const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)).json();

  const name = getInitials(user.name)

  return (
    <div className="">
      <div className="h-60 bg-slate-900 grid place-items-center place-content-center relative border-b-2 border-b-slate-800">
        <h1 className="text-5xl">{user.name}</h1>
        <p className="text-md text-muted-foreground mt-2">{user.email}</p>
        <Avatar className="absolute -bottom-14 left-10 w-32 h-32">
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <ScrollArea className="h-[70vh] p-10 mt-10">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-sm text-muted-foreground">
          Posts published by {user.name}
        </p>

        <div className="grid my-5">
          {
            posts.map(post => {
              return (
                <div className="my-2 border p-5 rounded" key={post.id}>
                  <h1 className="font-medium text-xl">{post.title}</h1>
                  <p className="font-normal leading-snug text-muted-foreground">{post.body}</p>
                </div>
              )
            })
          }
        </div>
      </ScrollArea>
    </div>
  )
}
import { Suspense } from "react";
import List from "./(List)";

export default function DashboardLayout( { children }) {
  return (
    <div className="grid lg:grid-cols-5">
        <List />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          {children}
        </div>
    </div>
  )
}
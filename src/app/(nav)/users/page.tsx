import { User } from "@/types"
import Image from "next/image"

export default async function UsersPage() {
  const res = await fetch("https://reqres.in/api/users", {
    next: {
      revalidate: false,
    },
  })

  const json = (await res.json()) as {
    data: User[]
  }

  return (
    <main className="mx-auto max-w-screen-md px-3 my-14 flex flex-col items-center">
      <h2 className="font-semibold text-xl mb-7">Users</h2>

      <div className="flex flex-wrap gap-3 justify-evenly mt-10">
        {json.data.map((user) => (
          <div
            key={user.id}
            className="w-[200px] flex flex-col gap-2 border border-gray-200 rounded-md shadow-sm p-4 items-center"
          >
            <p className="font-semibold text-lg">{user.first_name}</p>
            <p className="font-mono text-sm">{user.email}</p>

            <Image
              src={user.avatar}
              alt={user.first_name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

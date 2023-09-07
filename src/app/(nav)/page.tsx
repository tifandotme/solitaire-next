"use client"

import { Input } from "@/components/input"
import { type RegisterForm } from "@/types"
import React from "react"
import { useForm } from "react-hook-form"
import { CgSpinner } from "react-icons/cg"

export default function HomePage() {
  const [user, setUser] = React.useState<{} | undefined>(undefined)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterForm>()

  const onSubmit = async (data: RegisterForm) => {
    const res = await fetch("https://reqres.in/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })

    const json = await res.json()

    setUser(json)
  }

  return (
    <main className="mx-auto max-w-sm px-3 mt-14">
      <h2 className="self-center font-semibold text-xl mb-10 text-center">
        Register
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input label="Email" {...register("email")} />
        <Input label="Password" {...register("password")} />

        <button
          type="submit"
          className="bg-neutral-800 text-neutral-200 hover:bg-neutral-800/90 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {isSubmitting ? <CgSpinner size={20} className="animate-spin" /> : "Register"}
        </button>
      </form>

      {user && (
        <p className="font-mono text-sm mt-14 whitespace-break-spaces">
          {JSON.stringify(user, null, 2)}
        </p>
      )}
    </main>
  )
}

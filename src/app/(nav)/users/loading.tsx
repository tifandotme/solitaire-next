import { CgSpinner } from "react-icons/cg"

export default function Loading() {
  return (
    <div className="text-neutral-500 flex mt-32 justify-center">
      <CgSpinner size={40} className="animate-spin" />
    </div>
  )
}

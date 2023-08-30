import { useState, Fragment } from "react"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center"
      >
        <Bars2Icon className="w-6 h-6 text-gray-800" />
      </button>

      <div
        className={`absolute w-[80%] xl:w-[20%] h-full bg-white z-20 shadow-2xl ${
          open
            ? "left-0 top-0 bottom-0 transition-all duration-300 pointer-events-auto"
            : "-left-full top-0 bottom-0 transition-all duration-300 pointer-events-none"
        }`}
      >
        <div className="w-full p-4 flex justify-end items-center">
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 inline-flex justify-center items-center"
          >
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <ul className="px-5 mt-4 flex flex-col gap-y-4">
          <li>
            <Link href={"/"} className="font-semibold text-neutral-800 text-lg">
              New Employe
            </Link>
          </li>
          <li>
            <Link
              href={"/employees"}
              className="font-semibold text-neutral-800 text-lg"
            >
              Employees
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

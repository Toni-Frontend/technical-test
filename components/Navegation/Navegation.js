import Link from "next/link"
import Menu from "./Menu"

export default function Navegation() {
  return (
    <header className="w-full py-2 shadow-sm">
      <nav className="w-[95%] m-auto flex flex-row items-center justify-between">
        <Menu />
        <Link href="/" className="text-neutral-800 font-bold text-xl">
          Humaline
        </Link>
      </nav>
    </header>
  )
}

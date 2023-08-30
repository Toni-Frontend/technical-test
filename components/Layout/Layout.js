import { Fragment } from "react"
import Navegation from "../Navegation"

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navegation />
      {children}
    </Fragment>
  )
}

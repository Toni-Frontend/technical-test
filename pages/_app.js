import { EmployeesProvider } from "../context/EmployeesContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <EmployeesProvider>
      <Component {...pageProps} />
    </EmployeesProvider>
  )
}

export default MyApp

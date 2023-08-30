import { useContext } from "react"
import Employee from "../Employee"
import { EmployeesContext } from "../../context/EmployeesContext"
import { tableHeaders } from "./tableHeaders"

export default function Employees() {
  const { data } = useContext(EmployeesContext)

  return (
    <section className="w-[90%] m-auto flex flex-col justify-center items-center mt-8">
      <h2 className="text-neutral-800 font-medium text-xl">Employees</h2>
      <div className="container">
       <table className="table-auto border-collapse w-full mt-10">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={`Header-tr-${index}`} className="border bg-gray-200 px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="mt-12">
            {data && data.map((item) => (
              <Employee key={item.id} data={...item} />
            ))}
          </tbody>
       </table>
      </div>
    </section>
  )
}

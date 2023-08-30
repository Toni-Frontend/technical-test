import { useContext } from "react"
import { EmployeesContext } from "../../context/EmployeesContext"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function Employe({ data }) {
  const {
    name,
    id,
    email,
    age,
    salary,
    phone,
    address,
    department,
    civilStatus,
    jobTitle,
    birthDate,
    dateOfHire
  } = data

  const { deleteEmploye } = useContext(EmployeesContext)

  const formattedAmount = salary.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN"
  })

  return (
    <tr>
      <td className="border px-4 py-2">{id}</td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{email}</td>
      <td className="border px-4 py-2">{age}</td>
      <td className="border px-4 py-2">{phone}</td>
      <td className="border px-4 py-2">{formattedAmount}</td>
      <td className="border px-4 py-2">{address}</td>
      <td className="border px-4 py-2">{department}</td>
      <td className="border px-4 py-2">{civilStatus}</td>
      <td className="border px-4 py-2">{jobTitle}</td>
      <td className="border px-4 py-2">{birthDate}</td>
      <td className="border px-4 py-2">{dateOfHire}</td>
      <td className="border px-4 py-2 flex items-center justify-center">
        <button
          onClick={() => deleteEmploye(id)}
          className="bg-red-600 w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer"
        >
          <TrashIcon className="w-4 h-4 text-white" />
        </button>
      </td>
    </tr>
  )
}

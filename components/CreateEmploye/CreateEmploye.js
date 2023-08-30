import { useForm } from "react-hook-form"
import InputForm from "../InputForm"
import { inputFields } from "./fieldArray"
import { validationRules } from "../../lib/validations/rules"
import { useContext } from "react"
import { EmployeesContext } from "../../context/EmployeesContext"

export default function CreateEmploye() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    name: "",
    email: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    phone: "",
    dateOfHire: "",
    birthDate: "",
    civilStatus: "",
    jobTitle: ""
  })

  const { createEmploye } = useContext(EmployeesContext)

  const onSubmit = (data) => createEmploye(data, reset)

  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center my-8 xl:w-[50%]">
      <h2 className="text-neutral-800 font-semibold text-2xl">Add Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col xl:grid xl:grid-cols-2 xl:items-start gap-4">
          <div className="flex flex-col xl:gap-y-4">
            {inputFields.slice(0, 5).map((field) => (
              <InputForm
                key={field.name}
                control={control}
                label={field.label}
                name={field.name}
                type={field.type}
                rules={validationRules[field.name]}
                pattern={field.message}
                error={errors[field.name]}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4  items-start">
            {inputFields.slice(5, 11).map((field) => (
              <InputForm
                key={field.name}
                control={control}
                label={field.label}
                name={field.name}
                type={field.type}
                error={errors[field.name]}
                placeholder={field.placeholder}
                rules={validationRules[field.name]}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-12 mt-4 xl:mt-8 bg-blue-500 rounded-lg text-white font-semibold"
        >
          Create Employe
        </button>
      </form>
    </div>
  )
}

import React, { createContext } from "react"
import { useEmployees } from "../hooks/useEmployees"

export const EmployeesContext = createContext()

export const EmployeesProvider = ({ children }) => {
  const { data, createEmploye, deleteEmploye } = useEmployees()

  return (
    <EmployeesContext.Provider value={{ data, createEmploye, deleteEmploye }}>
      {children}
    </EmployeesContext.Provider>
  )
}

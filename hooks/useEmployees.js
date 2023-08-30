import axios from "axios"
import useSWR from "swr"

const API_URL = process.env.NEXT_PUBLIC_API_URL

const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export const useEmployees = () => {
  const { data, error, mutate } = useSWR(`${API_URL}/employees`, fetcher)

  const createEmploye = async (employe, reset) => {
    try {
      data.age = parseInt(data.age)
      data.salary = parseInt(data.salary)
      data.phone = parseInt(data.phone)

      await axios.post(`${API_URL}/employees`, employe)

      reset({
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

      // Actualizar los datos utilizando mutate
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteEmploye = async (id) => {
    try {
      await axios.delete(`${API_URL}/employees/${id}`)
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  return { data, error, createEmploye, deleteEmploye }
}

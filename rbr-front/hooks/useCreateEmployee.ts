import { api } from "@/api/api"
import { IEmployees } from "@/models/interfaces/employee"

export const useCreateEmployee = async (data: IEmployees) => {
   const newDate = data.admissionDate.split("/")

   data.admissionDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`

   await api.post("/employees", data)
}
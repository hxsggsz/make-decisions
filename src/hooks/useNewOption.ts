import { api } from "../api/axios";
import { useMutation, useQueryClient } from "react-query"

type NewOption = {
  id: string | undefined
  option: string
}

async function createTodo(data: NewOption) {
  return await api.post(`createOption`, data);
}

export const useNewOption = () => {
  const query = useQueryClient()
  const mutate = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      //invalida a query e a refaz com o novo conteúdo dentro
      query.invalidateQueries(["GetUser"])
    }
  })

  return mutate
}
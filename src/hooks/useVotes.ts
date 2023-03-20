import { useQueryClient, useMutation } from "react-query"
import { api } from "../api/axios"

export const useVote = () => {
  const query = useQueryClient()
  const mutate = useMutation({
    mutationFn: (id: string) => {
      return api.put(`/Vote/${id}`)
    },
    onSuccess: () => {
      query.invalidateQueries(["GetUser"])
    },
  })

  return mutate
}
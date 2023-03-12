import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { api } from "../api/axios"

type ContentType = {
  id: string
  option: string
  votes: number
}

type GetTodosType = {
  id: string;
  options: ContentType[];
}

export const useUser = (id: string) => {
  const navigate = useNavigate();

  const query = useQuery<GetTodosType>('GetUser', async () => {
    const response = await api.get(`GetUser/${id}`)

    //valida se o id bate com o da url. Se não bater, o usuário é redirecionado para "/404"
    if (!response.data) {
      navigate('/404')
    }

    return response.data
  })

  return query
}
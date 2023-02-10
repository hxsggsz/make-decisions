import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api/axios';

type GetTodosType = {
  id: string;
  Content: string[];
}

export const Todo = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { data } = useQuery<GetTodosType>('getTodo', async () => {
    const response = await api.get(`/${id}`)

    if (!data?.id) {
      navigate('/notFound')
    }
    return response.data
  })


  return (
    <>
      <h1>{id}</h1>
    </>
  )
}
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
    const response = await api.get(`GetUser/${id}`)

    return response.data
  })

  if (!data?.id) {
    navigate('/notFound')
  }

  async function createTodo() {
    const response = await api.post(`/createOption/${id}`, { options: "dwadwdawdd" });
    const data = response.data

    console.log(data, "dwaawd")
  }

  return (
    <>
      <h1>{id}</h1>

      <button onClick={() => createTodo()}>teste</button>
    </>
  )
}
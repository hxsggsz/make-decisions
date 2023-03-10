import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api/axios';
import { Navbar } from '../components/navbar/navbar';
import { Input } from '../components/input/input';
import { Submit } from '../components/buttons/button-submit/button-submit';
import { PaperPlaneRight } from 'phosphor-react';
import { StyledTodo } from '../styles/todo';

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

  if (!data) {
    navigate('/404')
  }

  // const mutation = useMutation({
  //   mutationFn: "createTodo",
  //   fn: () => {

  //   },
  // })
  async function createTodo() {
    const response = await api.post(`/createOption/${id}`, { options: "dwadwdawdd" });
    const data = response.data

    console.log(data, "dwaawd")
  }

  return (
    <>
      <Navbar />
      {/* <h1>{id}</h1> */}
      <StyledTodo style={{ display: "flex" }}>
        <Input />
        <Submit><PaperPlaneRight size={28} weight='bold' color="white" /></Submit>
      </StyledTodo>
    </>
  )
}
import { useParams } from 'react-router-dom';

export const Todo = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  )
}
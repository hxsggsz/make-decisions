import uuid from "react-uuid"
import { useReducer } from "react";
import { api } from "../api/axios";
import image from "/image-index.png";
import { StyledIndex } from "../styles";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Slider } from "../components/slider/slider";
import { Heading } from "../components/heading/heading";
import { Button } from "../components/buttons/button/button";
import { Notification } from "../components/notfication/notification";
import { initialState, loadingReducer } from "../reducer/loadingReducer";

type CreateIDType = {
  id: string;
};

export const Home = () => {
  const navigate = useNavigate()
  const id = uuid();
  // criar uma notificação pra quando der erro
  const [{ IsError, IsLoading }, dispatch] = useReducer(loadingReducer, initialState)

  const createNewId = async () => {
    dispatch({ type: "start" })

    try {
      const response = await api.post<CreateIDType>("CreateUser", { id });
      const data = response.data

      dispatch({ type: "success" })

      navigate(`/todo/${data.id}`)
    } catch (er) {
      console.log(er)
      dispatch({ type: "error" })
    }
  }
  return (
    <>
      <Navbar />

      <StyledIndex>
        <div className="mobile">
          <Slider />
          <Button onClick={createNewId} isLoading={IsLoading}>Vamos lá</Button>
        </div>

        <div className="desktop">

          <div className="container">
            <Heading size="md">A forma mais eficiente de decidir algo com seus amigos!</Heading>

            <Heading size="sm">Liste todas as opções e mande para os seus amigos votarem.</Heading>

            <Button onClick={createNewId} isLoading={IsLoading}>Vamos lá</Button>

          </div>
          <img src={image} width={500} height={450} />
        </div>
      </StyledIndex>
      {IsError && <Notification content={"alguma coisa deu errado, por favor tente novamete!"}/>}
    </>
  )
}
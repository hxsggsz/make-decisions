import uuid from "react-uuid"
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { initialState, loadingReducer } from "../reducer/loadingReducer";
import { Navbar } from "../components/navbar/navbar";
import { Slider } from "../components/slider/slider";
import { Button } from "../components/button/button";
import MainPage from "../container/main-page/MainPage";

type CreateIDType = {
  id: string;
};

export const Home = () => {
  const navigate = useNavigate()
  const id = uuid();

  const [{ IsError, IsLoading }, dispatch] = useReducer(loadingReducer, initialState)

  const createNewId = async () => {
    dispatch({ type: "start" })

    try {
      const response = await api.post<CreateIDType>("/CreateUser", { id });
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
      <MainPage />
    </>
  )
}
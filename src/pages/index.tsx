import uuid from "react-uuid"
import { api } from "../api/axios";
import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

import "../App.css";
import { useReducer } from "react";
import { initialState, loadingReducer } from "../reducer/loadingReducer";

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

      const response = await api.post<CreateIDType>("/create", { id });
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
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            onClick={createNewId}
          >
            {IsLoading ? "carregando" : "aqui"}
          </button>
          <p>
            {IsError && "algo deu errado, recarregue a página e tente novamente"}
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}
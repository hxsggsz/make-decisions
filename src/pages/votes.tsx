import { useParams } from "react-router-dom";
import { ButtonVotes } from "../components/buttons/button-votes/button-votes"
import { Navbar } from "../components/navbar/navbar"
import { useUser } from "../hooks/useUser";
import * as style from "../styles/votes"
import { useVote } from "../hooks/useVotes";
import { Empty } from "../components/empty/empty";
export const Votes = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate } = useVote()

  return (
    <style.StyledVotes>
      <Navbar />
      {data?.options.length === 0 ? <Empty isVotes path={`/todo/${id}`} /> :

        <div className="container">

          {data?.options.map(option => (
            <ButtonVotes key={option.id} vote={() => mutate(option.id)} votes={option.votes} id={option.id} />
          ))}

        </div>

      }
    </style.StyledVotes>
  )
}
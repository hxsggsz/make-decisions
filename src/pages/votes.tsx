import { useParams } from "react-router-dom";
import { ButtonVotes } from "../components/buttons/button-votes/button-votes"
import { Navbar } from "../components/navbar/navbar"
import { useUser } from "../hooks/useUser";
import * as style from "../styles/votes"
import { useVote } from "../hooks/useVotes";
import { Empty } from "../components/empty/empty";
import { useMemo } from "react";
import { Heading } from "../components/heading/heading";

export const Votes = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate } = useVote();

  const mostVoted = useMemo(() => {
    const OptionMostVoted = data?.options.find(option => Math.max(option.votes))

    if (OptionMostVoted) {
      return OptionMostVoted.option
    }
  }, [data])

  return (
    <>
      <Navbar />
      {data?.options.length === 0 ? <Empty isVotes path={`/todo/${id}`} /> :
        <>
          <Heading size="md">{mostVoted && `Opção mais votada: ${mostVoted}`}</Heading>

          <style.scroll>
            <style.votes>
              {data?.options.map(option => (
                <ButtonVotes
                  id={option.id}
                  key={option.id}
                  votes={option.votes}
                  name={option.option}
                  vote={() => mutate(option.id)}
                />
              ))}
            </style.votes>
          </style.scroll>
        </>
      }
    </>
  )
}
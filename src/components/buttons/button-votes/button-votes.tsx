import { ButtonHTMLAttributes, useState } from "react"
import { Heading } from "../../heading/heading"
import { StyledVotes } from "../buttons"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  votes: number;
  vote: () => void;
}


export const ButtonVotes = ({ id, votes, vote, ...props }: IButton) => {
  const getIsVoted = () => {
    const localVoted = localStorage.getItem(`isVoted${id}`);
  
    if (localVoted) {
      return JSON.parse(localVoted);
    }
    return false;
  };

  const [isVoted, setIsVoted ] = useState(getIsVoted())

  const handleDisable = () => {
    setIsVoted(!isVoted)
    localStorage.setItem(`isVoted${id}`,  JSON.stringify(!isVoted))
  }
  return (
    <StyledVotes onClick={() => {
      handleDisable()
      vote()
    }} disabled={isVoted} {...props}>
      <Heading size="sm">Vote aqui: {votes}</Heading>
    </StyledVotes>
  )
}
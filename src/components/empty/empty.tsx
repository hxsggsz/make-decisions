import { ArrowLeft } from "phosphor-react"
import { StyledEmpty } from "."
import { Button } from "../buttons/button/button"
import { Heading } from "../heading/heading"
import empty from "/public/empty.png"
import { Link } from "react-router-dom"

type EmptyTypes = {
  isVotes?: boolean | undefined;
  path?: string | undefined
}

export const Empty = ({ isVotes, path }: EmptyTypes) => {
  return (
    <StyledEmpty>
      <img src={empty} alt="três amigos sentados um do lado do outro" width={500} height={300} />
      <Heading size="md">Adicione algumas opções e compartilhe com seus amigos!</Heading>
      
      {isVotes && (
        <Button style={{ marginTop: "8rem" }} asChild>
          <Link to={path!}>
            <ArrowLeft size={38} weight="bold" style={{ paddingRight: "2rem" }} />
            Voltar para a lista
          </Link>
        </Button>
      )}
    </StyledEmpty>
  )
}
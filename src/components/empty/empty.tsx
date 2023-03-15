import { StyledEmpty } from "."
import { Heading } from "../heading/heading"
import empty from "/public/empty.png"

export const Empty: React.FC = () => {
  return (
    <StyledEmpty>
       <img src={empty} alt="três amigos sentados um do lado do outro" width={500} height={300} />
       <Heading size="md">Adicione algumas opções e compartilhe com seus amigos!</Heading>
    </StyledEmpty>
  )
}
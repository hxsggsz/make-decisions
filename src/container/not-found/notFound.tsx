import notFound from "/not-found.png"
import { Heading } from "../../components/heading/heading"
import { StyledNotFound } from "."
import { Button } from "../../components/button/button"
import { ArrowLeft } from "phosphor-react"

export const NotFoundPage = () => {
  /**
   * fazer amanha
   * criar os testes unitarios
   * deixar a pagina notfound responsiva
   */
  return (
    <StyledNotFound>
      <Heading>Página não encontrada :(</Heading>
      <img src={notFound} width={500} height={364} />
      <div>
        <Heading size="md">Volte para a página principal e tente de novo!</Heading>
        <Button><ArrowLeft style={{ marginRight: "1rem" }} size={38} weight="bold" /> Página principal</Button>
      </div>
    </StyledNotFound>
  )
}
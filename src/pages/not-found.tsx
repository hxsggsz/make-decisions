import { ArrowLeft } from "phosphor-react"
import { Link } from "react-router-dom"
import { Heading } from "../components/heading/heading"
import { Navbar } from "../components/navbar/navbar"
import { Button } from "../components/button/button"
import notFound from "/not-found.png"
import { StyledNotFound } from "../styles/not-found"
export const NotFoundPage = () => {
  return (
    <>
      < Navbar />
      <StyledNotFound>
        <Heading>Página não encontrada :(</Heading>
        <img src={notFound} width={450} height={364} />
        <div>
          <Heading size="md">Volte para a página principal e tente de novo!</Heading>
          <Button isLoading={false}>
            <Link to="/">
              <ArrowLeft style={{ marginRight: "1rem" }} size={38} weight="bold" />
              Página principal
            </Link>
          </Button>
        </div>
      </StyledNotFound>
    </>
  )
}
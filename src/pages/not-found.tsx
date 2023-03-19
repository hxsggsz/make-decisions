import notFound from "/not-found.png"
import { Link } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"
import { StyledNotFound } from "../styles/not-found"
import { Navbar } from "../components/navbar/navbar"
import { Heading } from "../components/heading/heading"
import { Button } from "../components/buttons/button/button"
export const NotFoundPage = () => {
  return (
    <>
      < Navbar />
      <StyledNotFound>
        <Heading>Página não encontrada :(</Heading>
        <img src={notFound} width={450} height={364} />
        <div>
          <Heading size="md">Volte para a página principal e tente de novo!</Heading>
          <Button asChild>
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
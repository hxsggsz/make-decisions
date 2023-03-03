import { Button } from "../../components/button/button"
import { Slider } from "../../components/slider/slider"
import { StyledIndex } from "."
import { Heading } from "../../components/heading/heading"
import image from "/image-index.png";

function MainPage() {
  return (
    <StyledIndex>
      <div className="mobile">
        <Slider />
        <Button>Vamos lá</Button>
      </div>

      <div className="desktop">

        <div className="container">
          <Heading size="md">A forma mais eficiente de decidir algo com seus amigos!</Heading>

          <Heading size="sm">Liste todas as opções e mande para os seus amigos votarem.</Heading>

          <Button>Vamos lá</Button>

        </div>
        <img src={image} width={500} height={450} />
      </div>
    </StyledIndex>
  )
}

export default MainPage
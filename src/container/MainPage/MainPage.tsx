import React from "react"
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
        <Button text="Vamos lá" />
      </div>

      <div className="desktop">

        <div className="container">
          <Heading size="md">A forma mais eficiente de decidir algo com seus amigos!</Heading>

          <Heading size="sm">Liste todas as opções e mande para os seus amigos votarem.</Heading>

          <Button text="Vamos lá" desktop={true} />

        </div>
        <img src={image} width={500} height={450} />
      </div>
    </StyledIndex>
  )
}

export default MainPage
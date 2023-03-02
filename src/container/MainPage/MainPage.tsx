import React from "react"
import { Button } from "../../components/button/button"
import { Slider } from "../../components/slider/slider"
import { StyledIndex } from "."

 function MainPage() {
  return (
    <StyledIndex>
      <Slider />
      <Button />
    </StyledIndex>
  )
}

export default MainPage
import { useState } from "react"
import { List, X } from "phosphor-react"
import { Heading } from "../heading/heading"
import * as Switch from '@radix-ui/react-switch';
import { useThemes } from "../../context/themeContext"
import logo from "../../../public/make-decisions-removebg-preview.png"
import icon from "../../../public/icon.png"
import { StyledMenu, StyledNavBar } from "."
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { colors, setColors } = useThemes()
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <>
      <StyledMenu>
        <List style={{ paddingLeft: "1rem" }} data-testid="menu" onClick={() => setIsShowMenu(true)} cursor={"pointer"} size={58} color="#534963" weight="bold" />
        <img className="logo" width={320} height={65} src={logo} alt="logo-make-decisions" />
        <img className="icon" width={80} height={65} src={icon} alt="logo" />
      </StyledMenu >

      <AnimatePresence>
        {isShowMenu && (
          <StyledNavBar initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -200, opacity: 0 }} transition={{ type: "tween" }}>
            <div className="close">
              <X cursor="pointer" onClick={() => setIsShowMenu(false)} data-testid='close' size={58} color="#534963" weight="bold" />
            </div>

            <ul>
              <li>
                <Heading size="md">
                  Tema {colors}
                  <Switch.Root style={{ marginLeft: "1rem" }} onCheckedChange={() => setColors(colors === "dark" ? "light" : "dark")} className="SwitchRoot">
                    <Switch.Thumb className="SwitchThumb" />
                  </Switch.Root>
                </Heading>
              </li>
              <li><Heading size="md"><a href="https://github.com/hxsggsz" target="_blank">Github</a></Heading></li>
              <li><Heading size="md"><a href="https://linkedin/in/hxsggsz" target="_blank">Linkedin</a></Heading></li>
            </ul>
          </StyledNavBar>
        )}
      </AnimatePresence>
    </>
  )
}
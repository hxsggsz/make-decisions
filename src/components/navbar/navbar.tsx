import { useState } from "react"
import { StyledNavbar } from "."
import logo from "/make-decisions-removebg-preview.png"
import { List, X } from "phosphor-react"
import { Heading } from "../heading/heading"
import icon from "/icon.png"
import * as Switch from '@radix-ui/react-switch';
import { useThemes } from "../../context/themeContext"

export const Navbar = () => {
  const { colors, setColors } = useThemes()
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(false)

  return (
    <StyledNavbar isShowMenu={isShowMenu}>
      <div>
        <List style={{ paddingLeft: "1rem" }} cursor={"pointer"} onClick={() => setIsShowMenu(true)} size={58} color="#534963" weight="bold" />
        <img className="logo" width={320} height={65} src={logo} alt="logo" />
        <img className="icon" width={80} height={65} src={icon} alt="logo" />
      </div>

      <nav>
        <div className="close">
          <X cursor="pointer" onClick={() => setIsShowMenu(false)} size={58} color="#534963" weight="bold" />

        </div>
        <ul>
          <li>
            <Heading size="md">
              Tema {colors ? "Light" : "Dark"}{"  "}
              <Switch.Root onCheckedChange={() => setColors(!colors)} className="SwitchRoot">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            </Heading>
          </li>
          <li><Heading size="md"><a href="https://github.com/hxsggsz" target="_blank">Github</a></Heading></li>
          <li><Heading size="md"><a href="https://linkedin/in/hxsggsz" target="_blank">Linkedin</a></Heading></li>
        </ul>
      </nav>
    </StyledNavbar >
  )
}
import { useState } from "react"
import { List, X } from "phosphor-react"
import { Heading } from "../heading/heading"
import * as Switch from '@radix-ui/react-switch';
import { useThemes } from "../../context/themeContext"
import logo from "../../../public/make-decisions-removebg-preview.png"
import icon from "../../../public/icon.png"
import * as style from "."
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { colors, setColors } = useThemes()
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <>
      <style.menu>
        <List data-testid="menu" onClick={() => setIsShowMenu(true)} cursor="pointer" size={58} color="#534963" weight="bold" />

        <Link to="/">
          <img className="logo" width={320} height={65} src={logo} alt="logo-make-decisions" />
          <img className="icon" width={80} height={65} src={icon} alt="logo" />
        </Link>
      </style.menu >

      <AnimatePresence>
        {isShowMenu && (
          <style.wrapper
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "tween" }}
          >
            <style.close>
              <X
                size={58}
                weight="bold"
                color="#534963"
                data-testid='close' 
                onClick={() => setIsShowMenu(false)}
              />
            </style.close>

            <style.listWrapper>

              <style.listItem>
                <Heading size="md">
                  Tema {colors}
                  <Switch.Root onCheckedChange={() => setColors(colors === "dark" ? "light" : "dark")} className="SwitchRoot">
                    <Switch.Thumb className="SwitchThumb" />
                  </Switch.Root>
                </Heading>
              </style.listItem>

              <style.listItem>
                <Link to="https://github.com/hxsggsz/make-decisions/tree/master" target="_blank" rel="noreferrer">
                  <Heading size="md">
                    Github
                  </Heading>
                </Link>
              </style.listItem>

              <style.listItem>
                <Link to="https://www.linkedin.com/in/hxsggsz/" target="_blank" rel="noreferrer">
                  <Heading size="md">
                    Linkedin
                  </Heading>
                </Link>
              </style.listItem>

            </style.listWrapper>
          </style.wrapper>
        )}
      </AnimatePresence>
    </>
  )
}
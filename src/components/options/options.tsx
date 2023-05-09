import * as style from ".";
import { Input } from "../input/input"
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Submit } from "../buttons/button-submit/button-submit"
import { PaperPlaneRight, Pencil, X } from "phosphor-react"
import { AnimatePresence } from "framer-motion";

interface OptionTypes extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  submit: () => void
  remove: () => void
}

export const Options = ({ children, submit, remove, ...props }: OptionTypes) => {
  const [changeOption, setChangeOption] = useState(false);

  return (
    <AnimatePresence>
      <style.option
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "backInOut" }}
      >
        {changeOption ?
          <style.inputOption
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Input
              data-testid="input"
              {...props}
            />
            <Submit data-testid="submit" onClick={() => {
              submit()
              setChangeOption(false)
            }}>
              <PaperPlaneRight
                size={28}
                weight="bold"
                color="white"
              />
            </Submit>
          </style.inputOption>
          : children}

        <style.buttonsWrapper>
          <Pencil
            size={38}
            weight="bold"
            cursor="pointer"
            data-testid="pencil"
            onClick={() => setChangeOption(!changeOption)}
          />

          <X
            size={38}
            weight="bold"
            cursor="pointer"
            onClick={remove}
            data-testid="close"
          />
        </style.buttonsWrapper>

      </style.option>
    </AnimatePresence>
  )
}
import * as style from ".";
import { Input } from "../input/input"
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Submit } from "../buttons/button-submit/button-submit"
import { PaperPlaneRight, Pencil, X } from "phosphor-react"

interface OptionTypes extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  submit: () => void
  remove: () => void
}

export const Options = ({ text, submit, remove, ...props }: OptionTypes) => {
  const [changeOption, setChangeOption] = useState(false);

  return (
    <>
      <style.option
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", duration: 0.6 }}
      >

        {changeOption ? (
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
        ) : text}

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
    </>
  )
}
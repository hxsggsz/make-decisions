import { PaperPlaneRight, Pencil, X } from "phosphor-react"
import { Submit } from "../buttons/button-submit/button-submit"
import { Input } from "../input/input"
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { PencilSlash } from "@phosphor-icons/react";
import { StyledOption } from ".";


interface OptionTypes extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  submit: () => void
  remove: () => void
}

export const Options = ({ children, submit, remove, ...props }: OptionTypes) => {
  const [changeOption, setChangeOption] = useState(false);
  
  return (
    <StyledOption initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "backInOut" }}>
      {changeOption ?
        <span
          className="changeOption">
          <Input
            {...props}
          />
          <Submit type="submit" onClick={() => {
            submit()
            setChangeOption(false)
          }}>
            <PaperPlaneRight
              size={28}
              weight="bold"
              color="white"
            />
          </Submit>
        </span>
        : children}
      <div className="options">
        {changeOption ?
          <PencilSlash
            onClick={() => setChangeOption(!changeOption)}
            cursor="pointer"
            size={38}
            weight="bold"
          />
          :
          <Pencil
            onClick={() => setChangeOption(!changeOption)}
            cursor="pointer"
            size={38}
            weight="bold"
          />}
        <X onClick={remove} cursor="pointer" size={38} weight="bold" />
      </div>
    </StyledOption>
  )
}
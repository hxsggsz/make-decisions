import * as style from ".";
import { useEffect, useState } from "react";
import { Heading } from "../heading/heading";

export const Notification = (props: { content: string }) => {
  const [IsShow, setIsShow] = useState(true);
  const { content } = props

  useEffect(() => {
    setTimeout(() => {
      setIsShow(!IsShow)
    }, 7000);
  }, [])

  return (
    <>
      {IsShow && (
        <style.wrapper initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}>
          <style.header>
            <Heading variant size="sm">Make Decisions</Heading>
          </style.header>
          <style.content>
            <Heading size="sm">{content}</Heading>
          </style.content>
        </style.wrapper>
      )}
    </>
  )
}
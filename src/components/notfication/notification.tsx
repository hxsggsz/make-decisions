import { useEffect, useState } from "react";
import { StyledNotification } from "."
import { Heading } from "../heading/heading"

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
        <StyledNotification initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}>
          <div className="header">
            <Heading variant size="sm">Make Decisions</Heading>
          </div>
          <div className="content">
            <Heading size="sm">{content}</Heading>
          </div>
        </StyledNotification>
      )}
    </>
  )
}
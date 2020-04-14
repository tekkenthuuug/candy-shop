import { useState, useEffect } from "react"

export const useEffectWithTypingTimer = (callback, timer, dependency) => {
  const [typingTimer, setTypingTimer] = useState();
  useEffect(() => {
    if (typingTimer) clearTimeout(typingTimer)
    setTypingTimer(
      setTimeout(() => {
        callback();
      }, timer)
    )
    // eslint-disable-next-line
  }, [dependency])
}
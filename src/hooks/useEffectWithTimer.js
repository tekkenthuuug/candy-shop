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
    return () => {
      clearTimeout(typingTimer);
    }
    // eslint-disable-next-line
  }, [dependency])
}
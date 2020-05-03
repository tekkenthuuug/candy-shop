import { useState, useEffect } from "react";

const useEffectWithTimer = (callback, delay, dependency) => {
  const [timer, setTimer] = useState();
  useEffect(() => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        callback();
      }, delay)
    );
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [dependency]);
};

export default useEffectWithTimer;

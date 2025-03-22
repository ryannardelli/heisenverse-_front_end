import { useState, useCallback } from "react";

export default function useToggle(initialState = false) {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const setActive = useCallback(() => setIsActive(true), []);
  const setInactive = useCallback(() => setIsActive(false), []);

  return { isActive, toggle, setActive, setInactive };
}

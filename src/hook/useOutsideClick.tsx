
import { useEffect, useState, MutableRefObject } from "react";

const useOutsideClick = (elementRef: MutableRefObject<HTMLElement | null>, func: () => void, block?: boolean) => {

  const [start, setStart] = useState(false);

  const handleClick = (e: Event) => {
    if (!elementRef.current?.contains(e.target as Node) && start && !block) {
      func();
    }
    setStart(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  })
}

export default useOutsideClick;



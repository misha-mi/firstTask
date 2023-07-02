
import { useEffect, useState, MutableRefObject } from "react";

const useOutsideClick = (elementRef: MutableRefObject<HTMLElement | null>, func: () => void, block?: boolean) => {

  const [start, setStart] = useState(false);

  const handleClick = (e: Event) => {
    if (!elementRef.current?.contains(e.target as Node) && start && !block) {
      func();
    }
  }

  setTimeout(() => setStart(true));

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  })
}

export default useOutsideClick;



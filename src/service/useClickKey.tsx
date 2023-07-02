
import { useEffect } from "react";

const useClickKey = (key: string, func: () => void) => {

  useEffect(() => {

    const clickKey = (e: any) => {
      if (e.key === key) {
        func();
      }
    }

    document.addEventListener("keydown", clickKey);

    return () => document.removeEventListener("keydown", clickKey);
  })

}

export default useClickKey;
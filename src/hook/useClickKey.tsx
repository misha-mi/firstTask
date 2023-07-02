
import { useEffect } from "react";

const useClickKey = (key: string, func: () => void, block?: boolean) => {

  useEffect(() => {

    const clickKey = (e: any) => {
      if (e.key === key && !block) {
        func();
      }
    }

    document.addEventListener("keydown", clickKey);

    return () => document.removeEventListener("keydown", clickKey);
  })

}

export default useClickKey;
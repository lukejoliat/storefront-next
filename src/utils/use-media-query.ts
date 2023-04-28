import { useCallback, useEffect, useState } from "react";

type Options = {
  less: boolean;
};

export const useMediaQuery = (width: number, options: Options) => {
  const [isBreakPoint, setIsBreakPoint] = useState(false);

  const handleResize = useCallback(() => {
    if (options.less) {
      window.innerWidth <= width
        ? setIsBreakPoint(true)
        : setIsBreakPoint(false);
    } else {
      window.innerWidth >= width
        ? setIsBreakPoint(true)
        : setIsBreakPoint(false);
    }
  }, [options.less, width]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isBreakPoint;
};

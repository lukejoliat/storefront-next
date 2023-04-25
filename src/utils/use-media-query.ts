import { useEffect, useState } from "react";

type Options = {
    less: boolean;
}

export const useMediaQuery = (width: number, options: Options) => {
    const [isBreakPoint, setIsBreakPoint] = useState(false);

    const handleResize = () => {
        if (options.less) {
            window.innerWidth <= width ? setIsBreakPoint(true) : setIsBreakPoint(false)
        } else {
            window.innerWidth >= width ? setIsBreakPoint(true) : setIsBreakPoint(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isBreakPoint
}
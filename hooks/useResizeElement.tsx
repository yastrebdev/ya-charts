import { useEffect, useState } from "react";

const useResizeElement = (element: {current: HTMLElement | null}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (element.current) {
                setWidth(element.current.offsetWidth);
                setHeight(element.current.offsetHeight);
            }
        };

        updateSize();

        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, [element]);
    return {width, height}
}

export default useResizeElement
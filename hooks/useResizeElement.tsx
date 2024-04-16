import { useEffect, useState } from "react";

const useResizeElement = (element: HTMLElement | null) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (element) {
                setWidth(element.offsetWidth);
                setHeight(element.offsetHeight);
            }
        };

        updateSize();

        window.addEventListener("resize", updateSize);
        console.log(element)
        return () => window.removeEventListener("resize", updateSize);
    }, [element]);
    return {width, height}
}

export default useResizeElement
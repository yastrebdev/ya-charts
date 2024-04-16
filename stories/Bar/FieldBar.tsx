import React, { useEffect, useRef, useState } from "react";
import Canvas from "../../components/use-components/Canvas";
import useResizeElement from "../../hooks/useResizeElement";

interface FieldBarProps {
    width?: number | string;
    height?: number | string;
}

export const FieldBar: React.FC<FieldBarProps> = ({
    width = 400,
    height = 400
}) => {
    const div = useRef<HTMLDivElement>(null);
    const {width: widthWrapper, height: heightWrapper} = useResizeElement(div.current)
    useEffect(() => {
        console.log(div.current)
    }, [div])

    const draw = (ctx: CanvasRenderingContext2D) => {
        // Ваша логика рисования
    }

    return (
        <div ref={div} style={{ width, height }}>
            <Canvas draw={draw} width={widthWrapper} height={heightWrapper}/>
        </div>
    )
}
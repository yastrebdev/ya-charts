// --- types
import { BarField } from "./types";
// --- react
import React, { useRef, useState } from "react";
// --- components
import Canvas from "../../components/use-components/Canvas";
// --- hooks - utils - functions
import useResizeElement from "../../hooks/useResizeElement";
import { dataAboutData } from "./functions";
import { draw } from "./draw";

export const Field: React.FC<BarField> = ({
    data,
    width,
    height,
    gap,
    fieldY,
    guides,
    columnColor
}) => {
    const [over, setOver] = useState(false)
    const [xmove, setXmove] = useState(0)
    const [ymove, setYmove] = useState(0)

    const mousePosition = {
        over,
        xmove,
        ymove
    }

    const div = useRef<HTMLDivElement>(null);
    const { width: widthWrapper, height: heightWrapper } = useResizeElement(div)

    const {
        numberOfColumn,
        columnWrapperWidth,
        maxValue
    } = dataAboutData(data, widthWrapper, fieldY)

    const styles = {
        columnColor
    }

    const options = {
        width: widthWrapper,
        height: heightWrapper,
        numberOfColumn,
        columnWrapperWidth,
        maxValue,
        gap,
        fieldY,
        guides,
        styles
    }

    const createChart = (ctx: CanvasRenderingContext2D) => draw(ctx, data, options, mousePosition)

    function onMouseEnter() {
        setOver(true)
    }

    function onMouseMove(event: MouseEvent) {
        const target = event.target as HTMLElement
        const rect = target?.getBoundingClientRect()

        setXmove(event.clientX - rect.left)
        setYmove(event.clientY - rect.top)
    }

    function onMouseLeave() {
        setOver(false)
    }

    return (
        <div ref={div} style={{ width, height }}>
            <Canvas
                draw={createChart}
                width={widthWrapper}
                height={heightWrapper}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
            />
        </div>
    )
}
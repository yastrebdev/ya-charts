import { useEffect, useRef } from "react";

interface CanvasProps {
    draw: (context: CanvasRenderingContext2D) => void;
    height?: number | string;
    width?: number | string;
    onMouseOver?: any;
}

const Canvas: React.FC<CanvasProps> = ({
    draw,
    height = 400,
    width = 400,
    onMouseOver,
}) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const context = canvas.current.getContext('2d');
        if (context) {
            draw(context);
        }
    }, [draw]);

    return (
        <canvas
            ref={canvas}
            height={height}
            width={width}
            onMouseOver={onMouseOver}
        />
    );
};

export default Canvas;
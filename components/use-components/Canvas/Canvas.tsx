import { useEffect, useRef } from "react";

interface CanvasProps {
    draw: (context: CanvasRenderingContext2D) => void;
    height: number;
    width: number;
}

const Canvas: React.FC<CanvasProps> = ({draw, height, width}) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const context = canvas.current.getContext('2d');
        if (context) {
            draw(context);
        }
    }, [draw]);

    return (
        <canvas ref={canvas} height={height} width={width} />
    );
};

export default Canvas;
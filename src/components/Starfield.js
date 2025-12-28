import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const stars = Array.from({ length: 250 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
        }));

        function animate() {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            stars.forEach((star) => {
                star.z -= 2;
                if (star.z <= 0) star.z = canvas.width;

                const sx = (star.x - canvas.width / 2) * (canvas.width / star.z);
                const sy = (star.y - canvas.height / 2) * (canvas.width / star.z);

                const x = sx + canvas.width / 2;
                const y = sy + canvas.height / 2;

                const size = 1.2 * (canvas.width / star.z);
                ctx.fillRect(x, y, size, size);
            });

            requestAnimationFrame(animate);
        }

        animate();
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}

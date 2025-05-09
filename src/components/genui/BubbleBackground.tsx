"use client";

import React, { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface Shape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  type: "bubble" | "triangle" | "square" | "polygon";
  rotation: number;
}

const BubbleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);
  const shapes = useRef<Shape[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const scrollPosition = useRef(0);

  // Add function to get computed CSS variable value
  const getComputedColor = (cssVar: string) => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize bubbles
    const initBubbles = () => {
      const colorVars = [
        "--imperial-red-primary",
        "--ut-orange-primary",
        "--triadic-blue",
        "--triadic-purple",
        "--imperial-red-light",
      ];

      bubbles.current = Array.from({ length: 15 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        color: getComputedColor(
          colorVars[Math.floor(Math.random() * colorVars.length)]
        ),
      }));
    };
    initBubbles();

    // Initialize shapes
    const initShapes = () => {
      const colorVars = [
        "--imperial-red-primary",
        "--ut-orange-primary",
        "--triadic-blue",
        "--triadic-purple",
        "--imperial-red-light",
      ];

      const shapeTypes: Shape["type"][] = [
        "bubble",
        "triangle",
        "square",
        "polygon",
      ];

      shapes.current = Array.from({ length: 25 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        color: getComputedColor(
          colorVars[Math.floor(Math.random() * colorVars.length)]
        ),
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        rotation: Math.random() * Math.PI * 2,
      }));
    };
    initShapes();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Scroll handler
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.current.forEach((bubble) => {
        // Update position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Mouse interaction
        const dx = mousePosition.current.x - bubble.x;
        const dy = mousePosition.current.y - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          bubble.x -= Math.cos(angle) * 0.5;
          bubble.y -= Math.sin(angle) * 0.5;
        }

        // Scroll interaction with damping
        const scrollEffect = scrollPosition.current * 0.0001; // Reduced from 0.01 to 0.001
        bubble.y += scrollEffect;
        bubble.speedY *= 0.30; // Add damping to slow down movement

        // Wrap around screen
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size;
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size;
        if (bubble.y < -bubble.size) bubble.y = canvas.height + bubble.size;
        if (bubble.y > canvas.height + bubble.size) bubble.y = -bubble.size;

        // Draw bubble with theme color
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `${bubble.color}${Math.floor(bubble.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      });

      shapes.current.forEach((shape) => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        // Mouse interaction
        const dx = mousePosition.current.x - shape.x;
        const dy = mousePosition.current.y - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          shape.x -= Math.cos(angle) * 0.5;
          shape.y -= Math.sin(angle) * 0.5;
        }

        // Scroll interaction with damping
        const scrollEffect = scrollPosition.current * 0.001; // Reduced from 0.01 to 0.001
        shape.y += scrollEffect;
        shape.speedY *= 0.99; // Add damping to slow down movement

        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        // Draw shape
        ctx.beginPath();
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        switch (shape.type) {
          case "bubble":
            ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
            break;
          case "triangle":
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
            ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
            break;
          case "square":
            const squareSize = shape.size * 0.8; // Slightly smaller than circle
            ctx.rect(-squareSize, -squareSize, squareSize * 2, squareSize * 2);
            break;
          case "polygon":
            const sides = 5; // Pentagon
            const angle = (Math.PI * 2) / sides;
            for (let i = 0; i < sides; i++) {
              const x = Math.cos(angle * i) * shape.size;
              const y = Math.sin(angle * i) * shape.size;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            break;
        }

        ctx.closePath();
        ctx.restore();

        ctx.fillStyle = `${shape.color}${Math.floor(shape.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BubbleBackground;

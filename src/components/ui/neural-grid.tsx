"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export function NeuralGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const SPACING = 80;
    const CONNECTION_DIST = 130;
    const DRIFT_SPEED = 0.3; // horizontal drift px/frame
    const WOBBLE = 12; // max wobble from grid position

    function initNodes() {
      const cols = Math.ceil(width / SPACING) + 3;
      const rows = Math.ceil(height / SPACING) + 2;
      const nodes: Node[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            baseX: c * SPACING - SPACING,
            baseY: r * SPACING - SPACING * 0.5,
            x: c * SPACING - SPACING + (Math.random() - 0.5) * WOBBLE,
            y: r * SPACING - SPACING * 0.5 + (Math.random() - 0.5) * WOBBLE,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
          });
        }
      }
      nodesRef.current = nodes;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = canvas!.parentElement!.clientWidth;
      height = canvas!.parentElement!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
      offsetRef.current = 0;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      offsetRef.current += DRIFT_SPEED;

      // Wrap offset
      if (offsetRef.current >= SPACING) {
        offsetRef.current -= SPACING;
      }

      const offset = offsetRef.current;

      // Update node positions with gentle wobble
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Pull back toward base position
        const dx = node.baseX + offset - node.x;
        const dy = node.baseY - node.y;
        node.vx += dx * 0.002;
        node.vy += dy * 0.002;

        // Damping
        node.vx *= 0.98;
        node.vy *= 0.98;
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x;
        const ay = a.y;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const ddx = ax - b.x;
          const ddy = ay - b.y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.08;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Subtle pulse based on position
        const pulse = 0.5 + 0.5 * Math.sin(node.baseX * 0.02 + Date.now() * 0.001);
        const radius = 1.2 + pulse * 0.6;
        const alpha = 0.06 + pulse * 0.06;

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
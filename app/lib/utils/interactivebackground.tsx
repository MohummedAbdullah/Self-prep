"use client";
import { useEffect ,useRef,useState} from "react";
export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);


  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0  bg-[#0a0a0a] overflow-hidden">
      {/* Dynamic Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(250, 250, 250, 0.22), transparent 100%)`
        }}
      />

      {/* Static Ambient Glows */}
      {/* <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-800/2 blur-[50px] pointer-events-none" /> */}
      <div className="absolute top-[-10%]  w-full h-[50%] rounded-full bg-cyan-100/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-[10%] right-[40%] w-[20%] h-[50%] rounded-full bg-red-100/10 blur-[80px] pointer-events-none" />
      {/* <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-200/5 blur-[50px] pointer-events-none" /> */}

      
      {/* Noise Overlay - Fixed path */}
      <div 
        className="absolute inset-0 opacity-[0.93] pointer-events-none" 
        style={{ backgroundImage: `url('/assets/nnnoise.svg')` }}
      />
    </div>
  );
}

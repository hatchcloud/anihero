'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const initializeGradient = () => {
      const gradient = new Gradient();
      gradient.initGradient("#canvas");
    };

    // Ensure the script has loaded before initializing the gradient
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
    script.onload = initializeGradient;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Cleanup the script if the component unmounts
    };
  }, []);

  return (
    <main>
      
      <div className='absolute h-screen flex items-center text-black text-8xl font-bold max-w-[900px] p-10  '>
      Let's turn ideas into awesome digital products!
      </div>
      <div className="background--custom absolute">
        <canvas id="canvas" />
      </div>
    </main>
  );
}

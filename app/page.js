'use client';

import { useEffect } from 'react';
import Script from 'next/script';

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
      <div className="background--custom">
        <canvas id="canvas" />
      </div>
    </main>
  );
}

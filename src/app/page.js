'use client'
import Image from "next/image";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { Cover } from "@/components/ui/cover";
// import * as reactSpring from '@react-spring/three'

export default function Home() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: "5"
        }}
        pointerEvents='none'
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.5&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=0&wireframe=false&zoomOut=false'
        />
      </ShaderGradientCanvas>

      {/* Forground part */}
      <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-5">
        <div className="max-w-[600px] w-[90%] mx-auto py-[30px] z-10">
          <a href="#">
            <h1 className="text-white text-4xl">Naimur</h1>
          </a>
          <div className="flex flex-col justify-center h-[80%]">
            <span className="text-[#4e69e0] font-[600]">Hi,</span>
            <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Naimur, <br /> Frontend <Cover>Developer</Cover>
            </h2>
            <a href="#" className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-semibold">
              Hire me &rarr;
            </a>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div className="w-full h-full flex items-end bg-[#0d0d0e74] z-10">
          <Image src="/naimur.png" width={800} height={1200} alt="Naimur" className="w-full max-h-screen object-contain object-left transform scale-x-[-1]" />
        </div>
        <div></div>
      </div>
    </>

  );
}

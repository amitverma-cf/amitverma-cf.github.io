import PixelBlast from "@/components/PixelBlast";

export function Hero() {
    return (
        <>
            <div className="h-screen w-screen absolute inset-0">
                <PixelBlast
                    className="absolute "
                    variant="circle"
                    pixelSize={4}
                    color="bg-blue-500"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            <div className="flex items-center justify-center h-screen pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">

                    <div className="order-2 md:order-1 h-screen w-full flex items-center">
                        <div className="max-w-xl px-10">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Hey👋
                            </h2>
                            <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                                I am
                            </span>
                            <h1 className="mt-3 text-6xl md:text-9xl font-black leading-none tracking-tight">
                                Amit
                            </h1>
                            <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tight">
                                Verma
                            </h1>
                        </div>
                    </div>

                    <img
                        src="/me.png"
                        alt="Amit Verma"
                        className="order-1 md:order-2 h-200 object-contain"
                        style={{ mixBlendMode: "screen", opacity: 0.6 }}
                    />
                </div>
            </div>
        </>
    );
}
// components
import CTA from "../components/CTA"

const HomeHero = () => {
    return (
        <div className=' bg-[url(./assets/images/home-hero-mobile.jpg)] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center md:bg-[url(./assets/images/home-hero-tablet.jpg)] xl:bg-[url(./assets/images/home-hero-desktop.jpg)]'>
            <div className=" flex flex-col items-center gap-y-[34px] px-8 md:gap-y-[24px] md:px-[98px] xl:items-start xl:px-[165px]">
                <h1 className=" text-center font-bold text-[40px] leading-10 text-white md:text-[56px] md:leading-[56px] md:tracking-[-2.5px] xl:text-start xl:w-1/2">
                    Scooter sharing made simple
                </h1>
                <p className=" text-center text-[15px] text-white font-['Lexend_Deca'] xl:w-1/2 xl:text-start">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </p>
                <CTA title="Get Scootin" />
            </div>
        </div>
    )
}

export default HomeHero
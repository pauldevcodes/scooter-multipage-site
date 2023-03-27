// assests
import digitalEra from '../assets/images/digital-era.jpg';
import beterLiving from '../assets/images/better-living.jpg';

const AboutFeatures = () => {
    return (
        <div className=' px-8 pt-[72px] pb-[120px] xl:px-[165px] flex flex-col gap-y-[120px]'>

            {/* first feature */}
            <div className=' flex flex-col gap-y-14 items-center xl:flex-row-reverse xl:gap-y-0 xl:gap-x-[220px]'>
                <img
                    src={digitalEra}
                    alt="digital era"
                    className=' rounded-full w-[311px] md:w-[445px]'
                />

                <div className=' flex flex-col gap-y-8 items-center md:px-14 xl:items-start xl:px-0'>
                    <h3 className=' font-bold text-[32px] text-[#495567] text-center leading-8 tracking-[-1.4px] md:text-5xl md:leading-[48px] md:tracking-[-2px] xl:text-start'>
                        Mobility for the digital era
                    </h3>
                    <p className=' text-[15px] leading-[25px] text-center text-[#939CAA] font-["Lexend_Deca"] xl:text-start'>
                        Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.
                    </p>
                </div>
            </div>

            {/* second feature */}
            <div className=' flex flex-col gap-y-14 items-center xl:flex-row xl:gap-y-0 xl:gap-x-[220px]'>
                <img
                    src={beterLiving}
                    alt="better living"
                    className=' rounded-full w-[311px] md:w-[445px]'
                />

                <div className=' flex flex-col gap-y-8 items-center md:px-14 xl:items-start xl:px-0'>
                    <h3 className=' font-bold text-[32px] text-[#495567] text-center leading-8 tracking-[-1.4px] md:text-5xl md:leading-[48px] md:tracking-[-2px] xl:text-start'>
                        Better urban living
                    </h3>
                    <p className=' text-[15px] leading-[25px] text-center text-[#939CAA] font-["Lexend_Deca"] xl:text-start'>
                        We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutFeatures
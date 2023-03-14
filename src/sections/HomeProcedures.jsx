import locate from '../assets/icons/locate.svg';
import ride from '../assets/icons/ride.svg';
import scooter from '../assets/icons/scooter.svg';

const HomeProcedures = () => {
    return (
        <div className=" py-[120px] px-8 flex flex-col gap-y-12 md:px-[98px] md:pt-[122px] md:pb-[125px] xl:flex-row xl:gap-y-0 xl:gap-x-[30px] xl:px-[165px]">

            {/* first procedure */}
            <div className=' flex flex-col items-center gap-y-6 md:flex-row md:gap-y-0 md:gap-x-[79px] md:items-start xl:flex-col xl:gap-y-10'>
                <img
                    src={locate}
                    alt="locating with the app"
                    className=' w-14 md:w-24'
                />
                <div className=' flex flex-col items-center gap-y-6 md:gap-y-[27px] md:items-start'>
                    <h1 className=' font-bold text-xl leading-7 text-center tracking-[-1px] text-[#495567] md:text-2xl md:tracking-[-1.1px] md:text-start'>
                        Locate with app
                    </h1>
                    <p className=' font-["Lexend_Deca"] text-[15px] leading-[25px] text-[#939CAA] text-center md:text-start'>
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.
                    </p>
                </div>
            </div>

            {/* second procedure */}
            <div className=' flex flex-col items-center gap-y-6 md:flex-row md:gap-y-0 md:gap-x-[79px] md:items-start xl:flex-col xl:gap-y-10'>
                <img
                    src={scooter}
                    alt="picking a scooter"
                    className=' w-14 md:w-24'
                />
                <div className=' flex flex-col items-center gap-y-6 md:gap-y-[27px] md:items-start'>
                    <h1 className=' font-bold text-xl leading-7 text-center tracking-[-1px] text-[#495567] md:text-2xl md:tracking-[-1.1px] md:text-start'>
                        Pick you scooter
                    </h1>
                    <p className=' font-["Lexend_Deca"] text-[15px] leading-[25px] text-[#939CAA] text-center md:text-start'>
                        We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.
                    </p>
                </div>
            </div>

            {/* third procedure */}
            <div className=' flex flex-col items-center gap-y-6 md:flex-row md:gap-y-0 md:gap-x-[79px] md:items-start xl:flex-col xl:gap-y-10'>
                <img
                    src={ride}
                    alt="enjoying the ride"
                    className=' w-14 md:w-24'
                />
                <div className=' flex flex-col items-center gap-y-6 md:gap-y-[27px] md:items-start'>
                    <h1 className=' font-bold text-xl leading-7 text-center tracking-[-1px] text-[#495567] md:text-2xl md:tracking-[-1.1px] md:text-start'>
                        Enjoy the ride
                    </h1>
                    <p className=' font-["Lexend_Deca"] text-[15px] leading-[25px] text-[#939CAA] text-center md:text-start'>
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default HomeProcedures
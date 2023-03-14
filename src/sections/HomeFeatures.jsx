// assests
import telemetry from '../assets/images/telemetry.jpg';
import nearYou from '../assets/images/near-you.jpg';
import payments from '../assets/images/payments.jpg';

// components
import CTA from '../components/CTA';
import { Link } from 'react-router-dom';

const HomeFeatures = () => {
    return (
        <div className=' px-8 flex flex-col items-center gap-y-[120px] mb-[120px] md:px-[98px] md:mb-[104px] xl:px-[165px] xl:mt-20 xl:mb-[200px]'>

            {/* first feature */}
            <div className=' flex flex-col items-center gap-y-14 xl:flex-row-reverse xl:gap-y-0 xl:gap-x-[220px]'>
                <img
                    src={telemetry}
                    alt="easy to use riding telemetry"
                    className=' rounded-full w-[311px] md:w-[445px]'
                />

                <div className=' flex flex-col gap-y-8 items-center xl:items-start'>
                    <h3 className=' font-bold text-[32px] leading-8 text-center tracking-[-1.2px] text-[#495567] md:text-5xl md:leading-[48px] md:tracking-[-2.1px] md:px-[58px] xl:px-0 xl:text-start'>
                        Easy to use riding telemetry
                    </h3>
                    <p className=' text-[#939CAA] text-[15px] leading-[25px] text-center font-["Lexend_Deca"] xl:text-start'>
                        The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.
                    </p>
                    <button className=" bg-[#fcb72b] font-bold text-[15px] text-center text-white py-[14px] px-[39px] duration-100 ease-in-out hover:text-[#fcb72b] hover:bg-transparent hover:border-2 hover:border-[#fcb72b]">
                        <Link to="about">
                            Learn more
                        </Link>
                    </button>
                </div>
            </div>

            {/* second feature */}
            <div className=' flex flex-col items-center gap-y-14 xl:flex-row xl:gap-y-0 xl:gap-x-[220px]'>
                <img
                    src={nearYou}
                    alt="always close to you"
                    className=' rounded-full w-[311px] md:w-[445px]'
                />

                <div className=' flex flex-col gap-y-8 items-center xl:items-start'>
                    <h3 className=' font-bold text-[32px] leading-8 text-center tracking-[-1.2px] text-[#495567] md:text-5xl md:leading-[48px] md:tracking-[-2.1px] md:px-[58px] xl:px-0 xl:text-start'>
                        Coming to a city near you
                    </h3>
                    <p className=' text-[#939CAA] text-[15px] leading-[25px] text-center font-["Lexend_Deca"] xl:text-start'>
                        Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
                    </p>
                    <button className=" bg-[#fcb72b] font-bold text-[15px] text-center text-white py-[14px] px-[39px] duration-100 ease-in-out hover:text-[#fcb72b] hover:bg-transparent hover:border-2 hover:border-[#fcb72b]">
                        <Link to="locations">
                            Learn more
                        </Link>
                    </button>
                </div>
            </div>

            {/* third feature */}
            <div className=' flex flex-col items-center gap-y-14 xl:flex-row-reverse xl:gap-y-0 xl:gap-x-[220px]'>
                <img
                    src={payments}
                    alt="stressless payments"
                    className=' rounded-full w-[311px] md:w-[445px]'
                />

                <div className=' flex flex-col gap-y-8 items-center xl:items-start'>
                    <h3 className=' font-bold text-[32px] leading-8 text-center tracking-[-1.2px] text-[#495567] md:text-5xl md:leading-[48px] md:tracking-[-2.1px] md:px-[58px] xl:px-0 xl:text-start'>
                        Zero hassle payments
                    </h3>
                    <p className=' text-[#939CAA] text-[15px] leading-[25px] text-center font-["Lexend_Deca"] xl:text-start'>
                        Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
                    </p>
                    <button className=" bg-[#fcb72b] font-bold text-[15px] text-center text-white py-[14px] px-[39px] duration-100 ease-in-out hover:text-[#fcb72b] hover:bg-transparent hover:border-2 hover:border-[#fcb72b]">
                        <Link to="about">
                            Learn more
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures
// assests
import ourTech from '../assets/images/our-tech.jpg';
import ourIntegrity from '../assets/images/our-integrity.jpg';
import ourCommunity from '../assets/images/our-community.jpg';

const WhyJoin = () => {
    return (
        <div className=" px-8 pb-[145px] md:px-[156px]">
            <div className=" flex flex-col items-center gap-y-16">

                <h2 className=" text-[#495567] font-bold text-[32px] leading-8 text-center tracking-[-1.4px]">
                    Why join us?
                </h2>

                <div className=' flex flex-col items-center gap-y-[56px] xl:flex-row xl:gap-y-0 xl:gap-x-[30px]'>

                    {/* first value */}
                    <div className=' flex flex-col items-center gap-y-16 md:gap-y-[87px]'>
                        <img
                            src={ourTech}
                            alt="Tech"
                            className=' rounded-full w-60'
                        />

                        <div className=' flex flex-col items-center gap-y-[27px]'>
                            <h6 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                                Our Tech
                            </h6>
                            <p className=' text-[15px] leading-[25px] text-center text-[#939CAA] font-["Lexend_Deca"]'>
                                We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!
                            </p>
                        </div>
                    </div>

                    {/* second value */}
                    <div className=' flex flex-col items-center gap-y-16 md:gap-y-[87px]'>
                        <img
                            src={ourIntegrity}
                            alt="Integrity"
                            className=' rounded-full w-60'
                        />

                        <div className=' flex flex-col items-center gap-y-[27px]'>
                            <h6 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                                Our Integrity
                            </h6>
                            <p className=' text-[15px] leading-[25px] text-center text-[#939CAA] font-["Lexend_Deca"]'>
                                We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.
                            </p>
                        </div>
                    </div>

                    {/* third value */}
                    <div className=' flex flex-col items-center gap-y-16 md:gap-y-[87px]'>
                        <img
                            src={ourCommunity}
                            alt="Community"
                            className=' rounded-full w-60'
                        />

                        <div className=' flex flex-col items-center gap-y-[27px]'>
                            <h6 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                                Our Community
                            </h6>
                            <p className=' text-[15px] leading-[25px] text-center text-[#939CAA] font-["Lexend_Deca"]'>
                                We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyJoin
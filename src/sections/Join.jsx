import joinUs from '../assets/images/join-us.jpg';

const Join = () => {
    return (
        <div className=' pt-[72px] px-8 pb-[120px] md:px-[98px] xl:px-[165px]'>
            <div className=' flex flex-col items-center gap-y-14 xl:flex-row-reverse xl:gap-x-[95px]'>

                {/* image */}
                <div className=' xl:basis-1/2'>
                    <img
                        src={joinUs}
                        alt="join"
                        className=' rounded-full'
                    />
                </div>

                {/* text */}
                <div className=' flex flex-col items-center gap-y-8 xl:basis-1/2 xl:items-start'>

                    <h2 className=' font-bold text-[32px] leading-8 text-center tracking-[-1.4px] text-[#495567] md:text-5xl md:leading-[48px] md:tracking-[-2px] xl:text-start'>
                        Care to join our mission?
                    </h2>

                    <p className=' font-["Lexend_Deca"] text-center text-[15px] leading-[25px] text-[#939caa] xl:text-start'>
                    We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!
                    </p>

                    <button className=' bg-[#fcb72b] font-bold text-[15px] leading-[25px] text-white px-12 py-[14px]'>
                        Say Hello
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Join
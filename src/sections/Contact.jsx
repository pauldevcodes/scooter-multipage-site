const Contact = () => {
    return (
        <div className=" px-8 pb-[72px] flex flex-col items-center gap-y-8 md:px-[98px] md:pb-[120px] xl:px-[165px] xl:flex-row xl:gap-x-[100px]">
            <h2 className=" font-bold text-[32px] leading-8 text-center tracking-[-1.4px] text-[#495567] capitalize md:text-5xl md:leading-[48px] md:tracking-[-2px] xl:text-start">
                Your city not listed?
            </h2>

            <p className=" text-[15px] leading-[25px] text-center text-[#939caa] font-['Lexend_Deca'] xl:text-start">
                If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
            </p>

            <button className=" bg-[#fcb72b] px-[45px] py-[15px] text-white font-bold text-[14px] leading-[25px] text-center ">
                Message Us
            </button>
        </div>
    )
}

export default Contact
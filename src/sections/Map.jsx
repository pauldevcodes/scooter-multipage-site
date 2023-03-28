// assests
import mobileMap from '../assets/images/world-map-mobile.png';
import tabletMap from '../assets/images/world-map-tablet.png';
import desktopMap from '../assets/images/world-map-desktop.png';

const Map = () => {
    return (
        <div className=" px-8 py-[72px] md:px-10 md:pt-[144px] md:pb-[64px] xl:px-[165px]">
            <div className=' flex flex-col gap-y-10'>
                <img 
                src={mobileMap} 
                alt="mobileMap" 
                className=' md:hidden'
                />

                <img 
                src={tabletMap} 
                alt="tabletMap" 
                className=' hidden md:block xl:hidden'
                />

                <img 
                src={desktopMap} 
                alt="desktopMap" 
                className=' hidden xl:block'
                />

                <div className=' flex flex-col gap-y-4 md:hidden'>
                    <div className=' bg-[#fdb72b26] px-[100px] py-[22px]'>
                        <h5 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                            New York
                        </h5>
                    </div>
                    <div className=' bg-[#fdb72b26] px-[100px] py-[22px]'>
                        <h5 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                            London
                        </h5>
                    </div>
                    <div className=' bg-[#fdb72b26] px-[100px] py-[22px]'>
                        <h5 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                           Jakarta
                        </h5>
                    </div>
                    <div className=' bg-[#fdb72b26] px-[100px] py-[22px]'>
                        <h5 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567]'>
                            Yokohama
                        </h5>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Map
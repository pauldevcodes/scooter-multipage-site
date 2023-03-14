// assests
import appIcon from '../assets/icons/apple.svg';
import googleIcon from '../assets/icons/google.svg';
import footerLogo from '../assets/icons/footerScoot.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

// rrd imports
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' min-w-[375px] mx-auto sm:max-w-screen-md md:max-w-screen-2xl'>

            {/* SIGN UP PART */}
            <div
                className=' bg-[#495567] py-[88px] px-8 flex flex-col items-center gap-y-10 lg:flex-row lg:w-full lg:justify-between xl:px-[165px]'
                id='getscootin'
            >
                <h1 className=' w-[311px] font-bold text-[32px] leading-8 text-center tracking-[-1px] text-white sm:w-[415px] sm:text-5xl sm:leading-[48px] sm:tracking-[-2px] lg:text-start'>
                    Sign up and Scoot off today
                </h1>

                {/* these buttons will lead to the playstore of either google or apple */}
                <div className=' w-[256px] flex items-center gap-x-[12.8px]'>

                    {/* button 1 */}
                    <button className=' w-114px bg-[#E5ECF4] rounded flex items-center gap-x-[8.4px] px-[11.4px] py-[6px]'>
                        <img src={appIcon} alt="apple icon" />
                        <span className=' flex flex-col justify-center items-start'>
                            <p className=' w-[65px] text-[6px] text-[#495567] font-medium'>
                                Available on the
                            </p>
                            <p className=' w-[64px] text-[#495567] font-semibold tracking-[-1px]'>
                                AppStore
                            </p>
                        </span>
                    </button>

                    {/* button 2 */}
                    <button className=' w-130px bg-[#E5ECF4] rounded flex items-center gap-x-[8.4px] px-[11.4px] py-[6px]'>
                        <img src={googleIcon} alt="google icon" />
                        <span className=' flex flex-col justify-center items-start'>
                            <p className=' w-[36px] text-[6px] text-[#495567] font-medium'>
                                Get it on
                            </p>
                            <p className=' w-[80px] text-[#495567] font-semibold tracking-[-1px]'>
                                GooglePlay
                            </p>
                        </span>
                    </button>

                </div>
            </div>

            {/* nav links and social icons */}
            <div className=' bg-[#333a44] py-16 px-8 flex flex-col items-center sm:flex-row sm:w-full sm:justify-between xl:px-[165px]'>
                {/* logo and nav links */}
                <div className=' sm:flex sm:items-center md:w-[418px] md:justify-between'>
                    <img src={footerLogo} alt="FooterScoot" />

                    <nav className=' flex flex-col gap-y-4 mt-[41.4px] sm:flex-row sm:gap-x-8 sm:mt-0'>
                        <Link
                            to="about"
                            className=' font-bold text-[15px] text-[#939caa] text-center hover:text-[#fcb72b]'
                        >
                            About
                        </Link>
                        <Link
                            to="locations"
                            className=' font-bold text-[15px] text-[#939caa] text-center hover:text-[#fcb72b]'
                        >
                            Locations
                        </Link>
                        <Link
                            to="careers"
                            className=' font-bold text-[15px] text-[#939caa] text-center hover:text-[#fcb72b]'
                        >
                            Careers
                        </Link>
                    </nav>
                </div>

                {/* social links */}
                <div className=' mt-[85px] flex items-center gap-x-8 sm:mt-0'>
                    <img src={facebook} alt="facebook" className=' hover:cursor-pointer' />
                    <img src={twitter} alt="facebook" className=' hover:cursor-pointer' />
                    <img src={instagram} alt="facebook" className=' hover:cursor-pointer' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
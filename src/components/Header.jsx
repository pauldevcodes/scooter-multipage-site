// react imports
import { useState } from 'react';

// assests
import logo from '../assets/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import close from '../assets/icons/close.svg';

// rrd imports
import { Link } from 'react-router-dom';

// components
import CTA from './CTA';

const Header = () => {
    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    }

    return (
        <header className=' min-w-[375px] mx-auto py-6 px-8 flex flex-row items-center sm:max-w-screen-md md:max-w-[1440px] xl:px-[165px]'>
            <nav
                className=' pr-16 sm:hidden'
                onClick={handleNavMenu}
            >
                {navMenu ? <img src={close} /> : <img src={hamburger} />}

                {navMenu && (
                    <nav className='bg-[#333A44] absolute top-[68px] left-0 px-8 pt-16 pb-6 flex flex-col justify-between h-screen'>
                        <ul className=' flex flex-col items-start gap-y-6'>
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
                        </ul>

                        <CTA />
                    </nav>
                )}
            </nav>

            {/* logo and nav links */}
            <div className=' flex flex-row items-center w-full sm:justify-between'>
                <div className=' sm:flex md:w-[418px] md:justify-between'>
                    <img
                        src={logo}
                        alt="logo"
                        className=' w-[76px] h-[20px]'
                    />

                    <nav className=' hidden sm:flex sm:items-center sm:gap-x-8'>
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

                <div className=' hidden sm:block'>
                    <CTA />
                </div>
            </div>
        </header>
    )
}

export default Header
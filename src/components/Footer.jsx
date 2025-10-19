import React from 'react';
import logo from "../assets/logo.png"

// Make sure you have react-icons installed: npm install react-icons
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
    
    // Icon styling ensures consistent look and hover effect
    const iconClass = "w-5 h-5 fill-current hover:text-gray-400 transition duration-300"; 

    return (
        <div className='w-full'>
            {/* Base background color and responsive padding: 
                py-6 (top/bottom padding)
                px-4 (small screen padding) 
                sm:px-8 lg:px-12 (larger screen padding) */}
            <footer className="bg-[#001931] text-white py-6 px-4 sm:px-8 lg:px-12">
                
                {/* Top Row: Logo Left, Social Links Right (Flexbox for 100% responsiveness) */}
                {/* max-w-7xl mx-auto centers the content on large screens while 
                    flex justify-between spreads the items to the edges on all screen sizes. */}
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    
                    {/* Left Side: Logo and Company Name (Always on the left) */}
                    <div className="flex items-center gap-2">
                        <img className="h-6 w-6" src={logo} alt="HERO.IO Logo" /> 
                        <h1 className="font-semibold text-xl">
                            HERO.IO
                        </h1>
                    </div>

                    {/* Right Side: Social Links (Always on the right) */}
                    <div className="flex flex-col items-end"> 
                        {/* Reduced margin-bottom (mb-1) for a tighter, more compact look on mobile */}
                        <h3 className="text-sm font-light mb-1 text-gray-400">Social Links</h3>
                        
                        <div className="flex gap-4">
                            
                            <a href="#" aria-label="Twitter">
                                <FaTwitter className={iconClass} />
                            </a>
                            
                            <a href="https://www.linkedin.com/in/sonatonroy/" aria-label="LinkedIn">
                                <FaLinkedinIn className={iconClass} />
                            </a>
                            
                            <a href="https://github.com/sonatonroyofficial" aria-label="GitHub">
                                <FaGithub className={iconClass} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separator Line (Full width) - Ensures it spans the content area */}
                <div className="mt-4 mb-3 max-w-7xl mx-auto border-t border-gray-700"></div>

                {/* Copyright Section (Centered) */}
                <div className="text-center max-w-7xl mx-auto">
                    <p className="text-xs text-gray-400">
                        Copyright © {new Date().getFullYear()} - All right reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
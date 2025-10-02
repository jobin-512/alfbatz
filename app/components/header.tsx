"use Client"

import { useState } from 'react';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-white px-4 py-3 shadow-lg h-[5rem] sticky top-0 z-50 bg-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className='h-[3rem]'  />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">Home</a>
                    <a href="/bio" className="text-white hover:text-gray-300 transition-colors">Bio</a>
                    <a href="/music" className="text-white hover:text-gray-300 transition-colors">Music</a>
                    <a href="/games" className="text-white hover:text-gray-300 transition-colors">Games</a>
                    <a href="/film" className="text-white hover:text-gray-300 transition-colors">Film & TV</a>
                    <a href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">Blog</a>
                </nav>

                {/* Social Media Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/alfbatzofficial/" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <span className="text-white text-sm font-bold">f</span>
                    </a>
                    
                    {/* Instagram */}
                    <a href="https://www.instagram.com/p/DJWRXqlRpfc/" className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </a>
                    
                    {/* YouTube */}
                    <a href="https://www.youtube.com/@alfbatzofficial" className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white hover:text-gray-300 transition-colors"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 mt-3 py-4 px-4 rounded-lg">
                    <nav className="flex flex-col space-y-4">
                        <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">Home</a>
                        <a href="/bio" className="text-white hover:text-gray-300 transition-colors">Bio</a>
                        <a href="/music" className="text-white hover:text-gray-300 transition-colors">Music</a>
                        <a href="/games" className="text-white hover:text-gray-300 transition-colors">Games</a>
                        <a href="/film" className="text-white hover:text-gray-300 transition-colors">Film & TV</a>
                        <a href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">Blog</a>
                    </nav>
                    
                    {/* Mobile Social Media Icons */}
                    <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
                        <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <span className="text-white text-sm font-bold">f</span>
                        </a>
                        
                        <a href="#" className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>
                        
                        <a href="#" className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
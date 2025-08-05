import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t-8 border-yellow-400 text-white pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img src="/logo.png" alt="ALF BATZ Logo" className="h-14 mb-4" />
          <h3 className="text-lg font-semibold mb-2">ABOUT OUR COMPANY:</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            I settle down in USA in the late 80s and did many productions and session work, I eventually started my own recording studio and did very well as engineer and producer. But COVID-19 took that away real quick and had to make some changes, so instead of closing I made it my own private studio and began to figure out who I am and what I would like to do.
          </p>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">CONTACT US:</h3>
          <div className="flex items-start mb-2">
            <span className="mr-2 mt-1">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div>
              Fame Paul Di'Anno X Iron Maiden<br />Singer
            </div>
          </div>
          <div className="flex items-start mb-2">
            <span className="mr-2 mt-1">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4" /></svg>
            </span>
            <div>
              alfbatz@gmail.com
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS:</h3>
          <ul className="space-y-2">
            {[
              { label: 'HOME', href: '/' },
              { label: 'BIO', href: '/bio' },
              { label: 'MUSIC', href: '/music' },
              { label: 'GAMES', href: '/games' },
              { label: 'FILM & TV', href: '/film' },
              { label: 'CONTACT', href: '/contact' },
            ].map(link => (
              <li key={link.label} className="flex items-center">
                <span className="mr-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L12 12.586V3a1 1 0 10-2 0v9.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5z" /></svg>
                </span>
                <a href={link.href} className="hover:text-yellow-400 transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Location */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">OUR LOCATION:</h3>
          <div className="w-full rounded-lg overflow-hidden border border-white">
            <iframe
              src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&#038;t=m&#038;z=16&#038;output=embed&#038;iwloc=near"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="London Eye, London, United Kingdom"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-yellow-400 text-sm mt-12 border-t border-yellow-400 pt-4">
        COPYRIGHT @ 2025 Designed by SKS TECH SOLUTION. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
} 
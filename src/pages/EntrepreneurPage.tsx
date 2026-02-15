import React from 'react';
import PillTitle from '@/components/PillTitle';

export default function App() {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#2a124f] to-[#8a4df5] text-white font-[Orbitron]">
      
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex lg:w-24 flex-col items-center py-6 gap-6">
        <button className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl">
          ←
        </button>

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-12 h-16 rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center text-3xl font-bold"
          >
            N
          </div>
        ))}

        <div className="absolute left-24 top-0 h-full w-[1px] bg-white/30" />
      </div>

      {/* Mobile Sidebar - Top bar */}
      <div className="lg:hidden w-full flex items-center justify-between p-4 bg-purple-900/50">
        <button className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-lg">
          ←
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center text-xl font-bold"
            >
              N
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8 lg:py-12 relative">
        
        {/* Pill Title */}
        <div className="flex justify-center mb-6">
          <PillTitle text="ENTREPRENEUR" />
        </div>

        {/* LENIENTTREE Heading */}
        <h2 
          className="font-bold text-white mb-6"
          style={{
            fontFamily: 'Iceberg, sans-serif',
            fontWeight: '400',
            fontSize: 'clamp(2.5rem, 8vw, 6.375rem)', // Responsive from 40px to 102px
            color: '#ffffff',
            letterSpacing: '0',
            lineHeight: '1.1',
            textAlign: 'left',
            width: '100%',
            maxWidth: '847px',
          }}
        >
          LENIENTTREE
        </h2>

        {/* LENIENTTREE Description */}
        <p 
          className="text-white mb-8"
          style={{
            fontFamily: 'Iceberg, sans-serif',
            fontWeight: '400',
            fontSize: 'clamp(1rem, 3vw, 2.64rem)', // Responsive from 16px to 42px
            color: '#ffffff',
            letterSpacing: '0',
            lineHeight: '1.35',
            width: '100%',
            maxWidth: '847px',
            textAlign: 'left',
          }}
        >
          LenientTree is a student-driven Web3 & startup community focused on bridging the gap between education and industry. We enable students to gain real-world exposure through ideathons, hackathons, workshops, portfolio building, and direct collaboration with founders, investors, and ecosystem partners.
        </p>

        {/* Button */}
        <button className="px-6 sm:px-8 py-2 rounded-full bg-white text-purple-700 font-semibold tracking-wider text-sm sm:text-base">
          VISIT
        </button>

        {/* Show More Indicator - Hidden on mobile */}
        <div 
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            right: '24px',
            bottom: '64px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
          }}
        >
          <span 
            style={{
              fontFamily: 'Iceberg, sans-serif',
              fontWeight: '400',
              fontSize: '39.44px',
              color: '#8342E6',
              transform: 'rotate(90deg)',
              transformOrigin: 'left center',
              whiteSpace: 'nowrap',
            }}
          >
            SHOW MORE
          </span>
          
          {/* Downward Arrow */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              color: '#8342E6',
            }}
          >
            <path
              d="M12 5v14M19 12l-7 7-7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Mobile Show More Button */}
        <div className="lg:hidden mt-8 text-center">
          <button className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-semibold tracking-wider">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

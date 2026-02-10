import React from 'react';
import PillTitle from '@/components/PillTitle';

export default function App() {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#2a124f] to-[#8a4df5] text-white font-[Orbitron]">
      
      {/* Sidebar */}
      <div className="w-24 flex flex-col items-center py-6 gap-6">
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

      {/* Main Content */}
      <div className="flex-1 px-16 py-12 relative">
        
        {/* Pill Title */}
        <div className="flex justify-center mb-6">
          <PillTitle text="ENTREPRENEUR" />
        </div>

        {/* LENIENTTREE Heading */}
        <h2 
          style={{
            fontFamily: 'Iceberg, sans-serif',
            fontWeight: '400', // Regular weight
            fontSize: '102.1px',
            color: '#ffffff',
            letterSpacing: '0',
            lineHeight: '1.1',
            textAlign: 'left',
            marginBottom: '1.5rem',
            width: '847px',
          }}
        >
          LENIENTTREE
        </h2>

        {/* LENIENTTREE Description */}
        <p 
          style={{
            fontFamily: 'Iceberg, sans-serif',
            fontWeight: '400', // Regular weight
            fontSize: '42.25px',
            color: '#ffffff',
            letterSpacing: '0',
            lineHeight: '1.35',
            width: '847px',
            textAlign: 'left',
            marginBottom: '2rem',
          }}
        >
          LenientTree is a student-driven Web3 & startup community focused on bridging the gap between education and industry. We enable students to gain real-world exposure through ideathons, hackathons, workshops, portfolio building, and direct collaboration with founders, investors, and ecosystem partners.
        </p>

        {/* Button */}
        <button className="px-8 py-2 rounded-full bg-white text-purple-700 font-semibold tracking-wider">
          VISIT
        </button>

        {/* Show More Indicator */}
        <div 
          style={{
            position: 'absolute',
            right: '24px',
            bottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            transform: 'rotate(90deg)', // Rotate entire container
            transformOrigin: 'center',
          }}
        >
          <span 
            style={{
              fontFamily: 'Iceberg, sans-serif',
              fontWeight: '400', // Regular weight
              fontSize: '39.44px',
              color: '#8342E6', // Violet color
              transform: 'rotate(90deg)',
              transformOrigin: 'left center', // Better bottom-to-top reading
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
      </div>
    </div>
  );
}

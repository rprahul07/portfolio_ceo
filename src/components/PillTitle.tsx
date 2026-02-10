import React from 'react';

const PillTitle = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        backgroundImage: 'url(/entrepreneur-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '999px', // Fully rounded
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Iceberg, sans-serif',
        fontSize: '103.5px',
        fontWeight: 'normal', // Regular weight, not bold
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '0', // No letter spacing
        lineHeight: '1', // Control vertical alignment
        opacity: '0.7',
        padding: '20px 40px', // Natural growth around text
        boxShadow: 'none', // Remove box shadow
      }}
    >
      {text}
    </div>
  );
};

export default PillTitle;

import React from 'react';

interface WorldMapProps {
  isDark?: boolean;
}

export function WorldMap({ isDark = false }: WorldMapProps) {
  return (
    <div className="h-[300px] relative">
      <img 
        src={isDark 
          ? "https://raw.githubusercontent.com/your-username/your-repo/main/dark-map.png"
          : "https://raw.githubusercontent.com/your-username/your-repo/main/light-map.png"
        }
        alt="World Map"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
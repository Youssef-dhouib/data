import React from 'react';

interface TimeframeSelectorProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

export function TimeframeSelector({ options, selected, onChange }: TimeframeSelectorProps) {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1 rounded-full text-sm ${
            selected === option
              ? 'bg-yellow-300 text-gray-900'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
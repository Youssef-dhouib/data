import React from 'react';

interface CountryData {
  country: string;
  flag: string;
  percentage: number;
}

interface AudienceMapProps {
  countries: CountryData[];
}

export function AudienceMap({ countries }: AudienceMapProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Audience Location</h3>
        <button className="text-sm text-gray-600 hover:text-gray-900">Export Report</button>
      </div>
      <div className="space-y-4">
        {countries.map((country) => (
          <div key={country.country} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{country.flag}</span>
              <span className="text-sm text-gray-600">{country.country}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-gray-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${country.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">{country.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
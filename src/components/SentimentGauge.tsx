import React from 'react';

interface SentimentGaugeProps {
  score: number;
  status: string;
}

export function SentimentGauge({ score, status }: SentimentGaugeProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Sentiment Analysis</h3>
        <button className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-2">{score}</div>
        <div className="text-sm text-green-500">{status}</div>
      </div>
    </div>
  );
}
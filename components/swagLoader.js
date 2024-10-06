

import { useState, useEffect } from 'react'

export default function SwagLoader() {
  const [dots, setDots] = useState([])

  useEffect(() => {
    setDots(Array(3).fill(null))
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[280px]">
      <div className="text-center">
        <div className="flex justify-center space-x-3 mb-4">
          {dots.map((_, index) => (
            <div
              key={index}
              className="w-5 h-5 bg-black rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="text-sm font-semibold animate-fade-in-up">
          Generating the link...
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .5;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  )
}
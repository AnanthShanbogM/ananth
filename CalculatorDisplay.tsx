import { useEffect, useRef } from "react";

interface CalculatorDisplayProps {
  value: string;
}

export const CalculatorDisplay = ({ value }: CalculatorDisplayProps) => {
  const displayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (displayRef.current) {
      const fontSize = calculateFontSize(value.length);
      displayRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [value]);
  
  // Dynamic font size calculation
  const calculateFontSize = (length: number): number => {
    if (length > 12) return 28;
    if (length > 8) return 36;
    return 48;
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <div 
        ref={displayRef}
        className="h-24 flex items-end justify-end text-white font-mono font-medium transition-all duration-200 overflow-hidden"
      >
        <span className="overflow-x-auto whitespace-nowrap scrollbar-hide">{value || "0"}</span>
      </div>
    </div>
  );
};
import { useState } from "react";

interface HistoryItem {
  calculation: string;
  result: string;
}

export const useCalculator = () => {
  const [display, setDisplay] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleNumberInput = (num: number) => {
    if (waitingForOperand) {
      setDisplay(num.toString());
      setWaitingForOperand(false);
    } else {
      // Don't allow numbers to start with multiple zeros
      if (display === "0") {
        setDisplay(num.toString());
      } else {
        setDisplay(display + num.toString());
      }
    }
  };

  const handleOperatorInput = (op: string) => {
    // If there's already a stored value, perform the calculation
    if (storedValue !== null && operator !== null && !waitingForOperand) {
      const result = performCalculation();
      setDisplay(result.toString());
      setStoredValue(result);
    } else {
      // Store the current value and operator
      setStoredValue(parseFloat(display) || 0);
    }
    
    setOperator(op);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (storedValue === null || operator === null || waitingForOperand) {
      return;
    }

    const currentValueNum = parseFloat(display);
    const calculation = `${storedValue} ${operator} ${currentValueNum}`;
    const result = performCalculation();
    
    // Add to history
    setHistory([
      {
        calculation: calculation,
        result: result.toString()
      },
      ...history
    ]);

    // Update display and reset
    setDisplay(result.toString());
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const performCalculation = (): number => {
    const currentValueNum = parseFloat(display);
    let result = 0;
    
    switch (operator) {
      case "+":
        result = (storedValue || 0) + currentValueNum;
        break;
      case "-":
        result = (storedValue || 0) - currentValueNum;
        break;
      case "*":
        result = (storedValue || 0) * currentValueNum;
        break;
      case "/":
        // Prevent division by zero
        if (currentValueNum === 0) {
          return NaN;
        }
        result = (storedValue || 0) / currentValueNum;
        break;
      default:
        return currentValueNum;
    }

    // Format the result to avoid very long decimal numbers
    return parseFloat(result.toFixed(9));
  };

  const handleClear = () => {
    setDisplay("");
    setCurrentValue("");
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleClearEntry = () => {
    setDisplay("");
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const handleBackspace = () => {
    if (waitingForOperand) return;
    
    if (display.length > 0) {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return {
    display,
    history,
    handleNumberInput,
    handleOperatorInput,
    handleEquals,
    handleClear,
    handleClearEntry,
    handleDecimal,
    handleBackspace,
    handleClearHistory
  };
};

import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeypad } from "./CalculatorKeypad";
import { CalculatorHistory } from "./CalculatorHistory";
import { useCalculator } from "@/hooks/useCalculator";

export const Calculator = () => {
  const {
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
  } = useCalculator();

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1">
        <CalculatorDisplay value={display} />
      </div>
      <div className="flex">
        <div className="flex-1">
          <CalculatorKeypad
            onNumberClick={handleNumberInput}
            onOperatorClick={handleOperatorInput}
            onEqualsClick={handleEquals}
            onClearClick={handleClear}
            onClearEntryClick={handleClearEntry}
            onDecimalClick={handleDecimal}
            onBackspaceClick={handleBackspace}
          />
        </div>
        <div className="w-1/3 border-l border-slate-100">
          <CalculatorHistory history={history} onClearHistory={handleClearHistory} />
        </div>
      </div>
    </div>
  );
};

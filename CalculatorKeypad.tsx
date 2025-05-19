import { CalculatorButton } from "./CalculatorButton";

interface CalculatorKeypadProps {
  onNumberClick: (num: number) => void;
  onOperatorClick: (op: string) => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onClearEntryClick: () => void;
  onDecimalClick: () => void;
  onBackspaceClick: () => void;
}

export const CalculatorKeypad = ({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onClearEntryClick,
  onDecimalClick,
  onBackspaceClick,
}: CalculatorKeypadProps) => {
  return (
    <div className="p-2 grid grid-cols-4 gap-2">
      {/* Row 1 */}
      <CalculatorButton variant="function" onClick={onClearClick}>AC</CalculatorButton>
      <CalculatorButton variant="function" onClick={onClearEntryClick}>CE</CalculatorButton>
      <CalculatorButton variant="function" onClick={onBackspaceClick}>⌫</CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => onOperatorClick("/")}>/</CalculatorButton>

      {/* Row 2 */}
      <CalculatorButton onClick={() => onNumberClick(7)}>7</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(8)}>8</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(9)}>9</CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => onOperatorClick("*")}>×</CalculatorButton>

      {/* Row 3 */}
      <CalculatorButton onClick={() => onNumberClick(4)}>4</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(5)}>5</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(6)}>6</CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => onOperatorClick("-")}>−</CalculatorButton>

      {/* Row 4 */}
      <CalculatorButton onClick={() => onNumberClick(1)}>1</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(2)}>2</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(3)}>3</CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => onOperatorClick("+")}>+</CalculatorButton>

      {/* Row 5 */}
      <CalculatorButton size="large" onClick={() => onNumberClick(0)}>0</CalculatorButton>
      <CalculatorButton onClick={onDecimalClick}>.</CalculatorButton>
      <CalculatorButton variant="equals" onClick={onEqualsClick}>=</CalculatorButton>
    </div>
  );
};

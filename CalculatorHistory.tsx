import { Button } from "@/components/ui/button";

interface HistoryItem {
  calculation: string;
  result: string;
}

interface CalculatorHistoryProps {
  history: HistoryItem[];
  onClearHistory: () => void;
}

export const CalculatorHistory = ({ history, onClearHistory }: CalculatorHistoryProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-3 bg-slate-50 border-b flex justify-between items-center">
        <h3 className="font-medium text-slate-700">History</h3>
        {history.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearHistory} 
            className="text-xs h-7"
          >
            Clear
          </Button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {history.length === 0 ? (
          <p className="text-center text-slate-400 text-sm p-4">No history yet</p>
        ) : (
          history.map((item, index) => (
            <div key={index} className="bg-slate-50 p-2 rounded text-right">
              <div className="text-sm text-slate-500">{item.calculation}</div>
              <div className="font-medium text-slate-800">{item.result}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

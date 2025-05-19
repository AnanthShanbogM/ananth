
// Update this page (the content is just a fallback if you fail to update the page)

import { Calculator } from "src/components/Calculator/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-slate-700 mb-6">React Calculator</h1>
      <Calculator />
    </div>
  );
};

export default Index;
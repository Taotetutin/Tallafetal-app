import React, { useState } from 'react';
import { Calculator, Baby, Ruler } from 'lucide-react';

function App() {
  const [femur, setFemur] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateFetalSize = () => {
    const femurValue = parseFloat(femur);
    if (isNaN(femurValue) || femurValue <= 0) {
      alert('Por favor, ingrese una longitud de fémur válida.');
      return;
    }
    const fetalSize = 6.18 + (0.59 * femurValue);
    setResult(fetalSize);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 px-4 py-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Baby className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-blue-800 mb-2">
              Calculadora de Talla Fetal
            </h1>
            <p className="text-blue-600">
              Calcula la talla fetal estimada basada en la longitud del fémur
            </p>
          </div>

          {/* Main Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Ruler className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Ingrese las Medidas
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="femur"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Longitud del Fémur (cm)
                  </label>
                  <input
                    type="number"
                    id="femur"
                    value={femur}
                    onChange={(e) => setFemur(e.target.value)}
                    step="0.01"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Ingrese la medida..."
                  />
                </div>

                <button
                  onClick={calculateFetalSize}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calculator className="h-5 w-5" />
                  Calcular Talla Fetal
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-center text-blue-800 font-semibold">
                      La talla fetal estimada es:
                      <span className="block text-2xl text-blue-600 mt-2">
                        {result.toFixed(2)} cm
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-blue-600 font-medium">
              Todos los derechos reservados a MiMaternoFetal.cl
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
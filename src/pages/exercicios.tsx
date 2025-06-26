// src/pages/QuadradosNotaveis.tsx
import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
};

const exercicios = [
  {
    label: "1-a)",
    expressao: "(2 + a)^2",
    desenvolvimento: "(2)^2 + 2 · 2 · a + (a)^2 = 4 + 4a + a^2",
    resultado: "4 + 4a + a^2"
  },
  {
    label: "1-b)",
    expressao: "(x + 2y)^2",
    desenvolvimento: "(x)^2 + 2 · x · 2y + (2y)^2 = x^2 + 4xy + 4y^2",
    resultado: "x^2 + 4xy + 4y^2"
  },
  {
    label: "1-c)",
    expressao: "(2a^2 · b)^2",
    desenvolvimento: "2^2 · (a^2)^2 · b^2 = 4a^4b^2",
    resultado: "4a^4b^2"
  },
  {
    label: "1-d)",
    expressao: "(-xy - y)^2",
    desenvolvimento: "Reescrevendo: [-(xy + y)]^2 = (xy + y)^2 \\\\ (xy)^2 + 2 · xy · y + (y)^2 = x^2y^2 + 2xy^2 + y^2",
    resultado: "x^2y^2 + 2xy^2 + y^2"
  },
  {
    label: "1-e)",
    expressao: "(3x - 2y)^2",
    desenvolvimento: "(3x)^2 - 2 · 3x · 2y + (2y)^2 = 9x^2 - 12xy + 4y^2",
    resultado: "9x^2 - 12xy + 4y^2"
  },
  {
    label: "1-f)",
    expressao: "\\left(\\frac{1}{2}ab + \\frac{1}{3}a\\right)^2",
    desenvolvimento: "\\left(\\frac{1}{2}ab\\right)^2 + 2 · \\frac{1}{2}ab · \\frac{1}{3}a + \\left(\\frac{1}{3}a\\right)^2 = \\frac{1}{4}a^2b^2 + \\frac{1}{3}a^2b + \\frac{1}{9}a^2",
    resultado: "\\frac{1}{4}a^2b^2 + \\frac{1}{3}a^2b + \\frac{1}{9}a^2"
  }
];

const QuadradosNotaveis: React.FC = () => {
  return (
    <MathJaxContext config={config}>
      <div className="min-h-screen bg-blue-50 py-10 px-6 text-blue-900">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          ExplicaConecta - Quadrados Notáveis
        </h1>
        <div className="space-y-6 max-w-3xl mx-auto">
          {exercicios.map((ex, index) => (
            <div key={index} className="bg-blue-100 border-l-4 border-blue-800 p-4 rounded shadow">
              <p className="font-semibold text-lg">{ex.label}</p>
              <p className="mt-1"><strong>Expressão:</strong> <MathJax inline>{`\\(${ex.expressao}\\)`}</MathJax></p>
              <p className="mt-1"><strong>Desenvolvimento:</strong> <MathJax>{`\\(${ex.desenvolvimento}\\)`}</MathJax></p>
              <p className="mt-1"><strong>Resultado final:</strong> <MathJax>{`\\(${ex.resultado}\\)`}</MathJax></p>
            </div>
          ))}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default QuadradosNotaveis;

import React from 'react';

export default function PolynomialExercises() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Cálculos Polinomiais</h1>

      {/* Exercício a: Soma e Subtração de Polinómios */}
      <section>
        <h2 className="text-2xl font-semibold">a) -2P(x) + ½Q(x)</h2>
        <p className="mb-2">\          Neste exercício, aplicamos a multiplicação escalar aos polinómios e somamos os resultados termo a termo.
        </p>
        <p className="whitespace-pre-line font-mono">
          -2P(x) = -4x⁴ + 6x³ - 2x² + 10x - 2
          ½Q(x) = 3.5x³ + 0.5x² + 2.5x - 1.5
          Soma: -4x⁴ + 9.5x³ - 1.5x² + 12.5x - 3.5
        </p>
      </section>

      {/* Exercício b: Multiplicação de Polinómios */}
      <section>
        <h2 className="text-2xl font-semibold">b) HR(x) ⋅ P(x)</h2>
        <p className="mb-2">
          Multiplicamos o polinómio R(x) por uma constante H = 4 e depois aplicamos a distributiva com P(x).
        </p>
        <p className="whitespace-pre-line font-mono">
          HR(x) = x⁴ + 20x² - 40
          P(x) = 2x⁴ - 3x³ + x² - 5x + 1
          Produto: 2x⁸ - 3x⁷ + 41x⁶ - 65x⁵ - 59x⁴ + 20x³ - 20x² + 200x - 40
        </p>
      </section>

      {/* Fatorações */}
      <section>
        <h2 className="text-3xl font-bold">Fatorações</h2>

        <div className="space-y-4">
          <div>
            <p><strong>a)</strong> (x² - 2x)² = x²(x - 2)²</p>
            <p className="text-sm text-gray-600">Aplicação do quadrado perfeito e fator comum.</p>
          </div>
          <div>
            <p><strong>b)</strong> 10xyz + 8xyz² - 3xyz = xyz(8z + 7)</p>
            <p className="text-sm text-gray-600">Fatoração por termo comum.</p>
          </div>
          <div>
            <p><strong>c)</strong> (x - 1)² - 81 = (x - 10)(x + 8)</p>
            <p className="text-sm text-gray-600">Diferença de quadrados.</p>
          </div>
          <div>
            <p><strong>d)</strong> 4x² + 12x + 9x = x(4x + 21)</p>
            <p className="text-sm text-gray-600">Fator comum após soma de termos semelhantes.</p>
          </div>
          <div>
            <p><strong>e)</strong> 2(x + 2) + (3/2)(x + 2)² = (x + 2)(3/2x + 5)</p>
            <p className="text-sm text-gray-600">Fator comum e distributiva.</p>
          </div>
        </div>
      </section>

      {/* Resolução de Equações */}
      <section>
        <h2 className="text-3xl font-bold">Resolução de Equações</h2>

        <div className="space-y-4">
          <div>
            <p><strong>a)</strong> (2x - 1)² = 2x(x + 3) → 2x² - 10x + 1 = 0</p>
            <p className="text-sm text-gray-600">Expandimos os dois lados e igualamos.</p>
          </div>
          <div>
            <p><strong>b)</strong> (x + 4)² + (x + 1)(x - 4) = 20 → 2x² + 5x - 8 = 0</p>
            <p className="text-sm text-gray-600">Expandimos e organizamos os termos.</p>
          </div>
          <div>
            <p><strong>c)</strong> x - 3 + 2(x - 2) = 3(x - 2)(x - 3) → 3x² - 18x + 25 = 0</p>
            <p className="text-sm text-gray-600">Lado esquerdo reduzido e lado direito expandido.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

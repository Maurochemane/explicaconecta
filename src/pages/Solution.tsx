import Header from "@/components/Header";
import React, { useState } from "react";


  const ExerciciosFatoracao: React.FC = () => {
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <Header />

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-xl font-bold mb-4 text-green-800"> Resolução Equações Quadráticas</h1>
        {/* Conteúdo do teste omitido para brevidade */}

        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={() => setMostrarGabarito(!mostrarGabarito)}
        >
          {mostrarGabarito ? "Ocultar Resolução" : "Ver Resolução"}
        </button>
      </section>

      {mostrarGabarito && (
        <section className="bg-white shadow-md rounded-2xl p-0 md:p-6">
          <h1 className="text-2xl font-bold mb-4 text-primary"> Resolução do teste </h1>
          {/* Gabarito completo mantido aqui */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4">1. Lei do Anulamento do Produto</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>x² - 6x = 0<br/> → x(x - 6) = 0 <br/>→ x =  0 ou x = 6</li>
            <li>x² + 5x = 0 <br/>→ x(x + 5) = 0 <br/>→ x = 0 ou x = -5</li>
            <li>2x² - 10x = 0 <br/>→ 2x(x - 5) = 0<br/> → x = 0 ou x = 5</li>
            <li>x(x + 4) = 0<br/> → x = 0 ou x = -4</li>
            <li>3x² = 12x <br/>→ 3x² - 12x = 0 <br/>→ 3x(x - 4) = 0 <br/>→ x = 0 ou x = 4</li>
          </ol>

          <h2 className="text-lg font-semibold text-gray-700 mt-4">2. Soma e Produto</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2" start={6}>
            <li>x² - 11x + 30 = 0 <br/>→ soma = 11, produto = 30 <br/>→ x = 6 ou x = 5</li>
            <li>x² - 10x + 25 = 0 <br/>→ soma = 10, produto = 25 <br/>→ x = 5 (raiz dupla)</li>
            <li>x² - 13x + 40 = 0 <br/>→ soma = 13, produto = 40 <br/>→ x = 8 ou x = 5</li>
            <li>x² - 12x + 36 = 0 <br/>→ soma = 12, produto = 36 <br/>→ x = 6 (raiz dupla)</li>
            <li>x² - 8x + 15 = 0 <br/>→ soma = 8, produto = 15 <br/>→ x = 5 ou x = 3</li>
          </ol>

          <h2 className="text-lg font-semibold text-gray-700 mt-4">3. Fórmula Resolvente</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2" start={11}>
            <li>x² + 3x - 10 = 0 <br/>→ Δ = 9 + 40 = 49 <br/>→ x = (-3 ± 7)/2 <br/>→ x = 2 ou x = -5</li>
            <li>x² - 5x - 6 = 0 <br/> → Δ = 25 + 24 = 49 <br/>→ x = (5 ± 7)/2 <br/>→ x = 6 ou x = -1</li>
            <li>2x² - 3x - 2 = 0 <br/>→ Δ = 9 + 16 = 25 <br/>→ x = (3 ± 5)/4 <br/>→ x = 2 ou x = -0.5</li>
            <li>3x² + 2x - 1 = 0 <br/>→ Δ = 4 + 12 = 16 <br/>→ x = (-2 ± 4)/6 <br/>→ x = 1/3 ou x = -1</li>
            <li>x² + 4x + 4 = 0 <br/>→ Δ = 16 - 16 = 0 <br/>→ x = -2 (raiz dupla)</li>
          </ol>

          <h2 className="text-lg font-semibold text-gray-700 mt-4">4. Equações Fraccionárias</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2" start={16}>
            <li>1/x + 2 = x → x(1/x + 2) = x² <br/>→ 1 + 2x = x²<br/> → x² - 2x - 1 = 0 <br/>→ x ≈ 2.41 ou x ≈ -0.41</li>
            <li>1/(x + 1) + x = 3 <br/>→ multiplicar por (x + 1)<br/> → 1 + x(x + 1) = 3(x + 1) <br/>→ x² - 2x - 2 = 0 <br/>→ x ≈ 1.30 ou x ≈ 0.54</li>
            <li>x/(x + 1) + 1 = 2 <br/>→ x + x + 1 = 2(x + 1) <br/>→ x² + x + x + 1 = 2x + 2 → x² - x - 1 = 0 <br/>→ x ≈ 0.62 ou x ≈ -1.62</li>
            <li>1/(x - 2) + 3 = x <br/>→ multiplicar por (x - 2)<br/> → 1 + 3(x - 2) = x(x - 2) <br/>→ x² - 5x + 3 = 0 <br/>→ x ≈ 2.30 ou x ≈ 0.70</li>
            <li>2/x + x = 5 <br/>→ multiplicar por x <br/>→ 2 + x² = 5x → x² - 5x + 2 = 0<br/> → x ≈ 1.56 ou x ≈ 0.64</li>
          </ol>

          <h2 className="text-lg font-semibold text-gray-700 mt-4">5. Discriminante</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2" start={21}>
            <li>x² - 2√3x + 1 <br/>→ Δ = (-2√3)² - 4(1)(1) = 12 - 4 = 8</li>
            <li>2x² + 4x + 5<br/> → Δ = 16 - 40 = -24</li>
            <li>x² + 6x + 9 <br/>→ Δ = 36 - 36 = 0</li>
            <li>3x² - x - 7 <br/>→ Δ = 1 + 84 = 85</li>
            <li >x² + 7x + 10 <br/>→ Δ = 49 - 40 = 9</li>
          </ol>
        </section>
      )}
    </div>
  );
}

export default  ExerciciosFatoracao;
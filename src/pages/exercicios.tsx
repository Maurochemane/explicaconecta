
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "@/components/Footer";

const ExerciciosFatoracao: React.FC = () => {
const [matematica, setMatematica] = useState(false);
  return (
    <div className="max-w-4xl mt-16 mx-auto p-0 md:p-3 space-y-10">
      <Header />

      <section className="bg-white shadow-2xl rounded-2xl p-5">
        <h1 className="text-xl font-bold mb-4 text-blue-800">📘 Ficha de Exercícios Resolvidos Equações Quadráticas</h1>

        <h2 className="text-xl font-semibold text-blue-800 mt-6">1. Lei do Anulamento do Produto</h2>
        <p className="mt-2 text-gray-800 font-semibold">Exemplo 1: x² - 5x = 0</p>
        <p className="text-gray-700">1º Colocar x em evidência:<br/> x(x - 5) = 0</p>
        <p className="text-gray-700">2º Aplicar a lei do produto nulo:<br/> x = 0 ou x = 5</p>

        <p className="mt-4 text-gray-800 font-semibold">Exemplo 2: x² + 2x = 0</p>
        <p className="text-gray-700">1º Colocar x em evidência:<br/> x(x + 2) = 0</p>
        <p className="text-gray-700">2º Aplicar a lei do produto nulo:<br/> x = 0 ou x = -2</p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">2. Cálculo com Soma e Produto</h2>
        <p className="mt-2 text-gray-800 font-semibold">Exemplo 1: x² - 7x + 10 = 0</p>
        <p className="text-gray-700">1º Procurar dois números cuja soma seja 7 e produto 10</p>
        <p className="text-gray-700">2º Encontramos <br/>5 e 2 → x = 2 ou x = 5</p>

        <p className="mt-4 text-gray-800 font-semibold">Exemplo 2: x² - 9x + 20 = 0</p>
        <p className="text-gray-700">1º Soma = 9, Produto = 20 → Números: 4 e 5</p>
        <p className="text-gray-700">2º Soluções:<br/> x = 4 ou x = 5</p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">3. Fórmula Resolvente</h2>
        <p className="mt-2 text-gray-800 font-semibold">Exemplo 1: x² - 4x - 5 = 0</p>
        <p className="text-gray-700">1º Identificar a = 1, b = -4, c = -5</p>
        <p className="text-gray-700">2º Calcular Δ = b² - 4ac = 36</p>
        <p className="text-gray-700">3º Aplicar fórmula:<br/> x = (4 ± 6)/2 → x = 5 ou x = -1</p>

        <p className="mt-4 text-gray-800 font-semibold">Exemplo 2: x² + 2x - 3 = 0</p>
        <p className="text-gray-700">1º a = 1, b = 2, c = -3</p>
        <p className="text-gray-700">2º Δ = 2² + 12 = 16</p>
        <p className="text-gray-700">3º x = (-2 ± √16)/2 = (-2 ± 4)/2 → x = 1 ou x = -3</p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">4. Equação Quadrática Fraccionária</h2>
        <p className="mt-2 text-gray-800 font-semibold">Exemplo 1: 1/x + x = 6</p>
        <p className="text-gray-700">1º Multiplicar toda a equação por x → 1 + x² = 6x</p>
        <p className="text-gray-700">2º x² - 6x + 1 = 0 → aplicar fórmula resolvente</p>

        <p className="mt-4 text-gray-800 font-semibold">Exemplo 2: x + 1/(x + 1) = 3</p>
        <p className="text-gray-700">1º Multiplicar por (x + 1): x(x + 1) + 1 = 3(x + 1)</p>
        <p className="text-gray-700">2º Expandir e reorganizar: x² - 2x - 2 = 0 → fórmula resolvente</p>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-primary">📝 Teste de Preparação Equações Quadráticas</h1>

        <h2 className="text-lg font-semibold text-gray-700 mt-4">1. Lei do Anulamento do Produto</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800">
          <li>x² - 6x = 0</li>
          <li>x² + 5x = 0</li>
          <li>2x² - 10x = 0</li>
          <li>x(x + 4) = 0</li>
          <li>3x² = 12x</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-700 mt-6">2. Cálculo com Soma e Produto</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800" start={6}>
          <li>x² - 11x + 30 = 0</li>
          <li>x² - 10x + 25 = 0</li>
          <li>x² - 13x + 40 = 0</li>
          <li>x² - 12x + 36 = 0</li>
          <li>x² - 8x + 15 = 0</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-700 mt-6">3. Fórmula Resolvente</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800" start={11}>
          <li>x² + 3x - 10 = 0</li>
          <li>x² - 5x - 6 = 0</li>
          <li>2x² - 3x - 2 = 0</li>
          <li>3x² + 2x - 1 = 0</li>
          <li>x² + 4x + 4 = 0</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-700 mt-6">4. Equações Quadráticas Fraccionárias</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800" start={16}>
          <li>1/x + 2 = x</li>
          <li>1/(x + 1) + x = 3</li>
          <li>x/(x + 1) + 1 = 2</li>
          <li>1/(x - 2) + 3 = x</li>
          <li>2/x + x = 5</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-700 mt-6">5. Binómio Discriminante</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800" start={21}>
          <li>Calcule o discriminante de: <br/> x² - 2√3x + 1 = 0</li>
          <li>Calcule o discriminante de: <br/> 2x² + 4x + 5 = 0</li>
          <li>Calcule o discriminante de: <br/> x² + 6x + 9 = 0</li>
          <li>Calcule o discriminante de: <br/> 3x² - x - 7 = 0</li>
          <li>Calcule o discriminante de: <br/> x² + 7x + 10 = 0</li>
        </ol>
        <p className=""><br/>Boa sorte resolva com Calma e atenção.</p>
        <p className="font-bold text-primary">Prazo final domingo 06-07-25.</p>
        <p className="font-bold text-primary">16:horas</p>

        <Link to= "/solution">
        <button className="  mt-8 bg-transparent border-2 border-primary hover:bg-white hover:text-black text-primary font-semibold py-1 px-6 rounded-lg transition">
          Resolução domingo 16h
        </button>
        </Link>
      </section>
      <div className="py-0 mx-0">
      <Footer />

    </div>
    </div>
  );
}

export default  ExerciciosFatoracao;

import React from "react";

const ExerciciosFatoracao: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 text-lg">
      <h1 className="text-3xl font-bold text-center">Exercícios Resolvidos: Fatoração e Casos Notáveis</h1>

      {/* Fatoração por fator comum */}
      <section>
        <h2 className="text-2xl font-semibold">1. Fatoração por Fator Comum</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li><strong>a)</strong> ab − ac² = a(b − c²)</li>
          <li><strong>b)</strong> 3a²b + 6ab² = 3ab(a + 2b)</li>
          <li><strong>c)</strong> 8xy − 12yz = 4y(2x − 3z)</li>
          <li><strong>d)</strong> 14x³y + 21x²y² − 28xy³ = 7xy(2x² + 3xy − 4y²)</li>
          <li><strong>e)</strong> 4x³ + 8x⁴ − 6x³ + 32x² = 2x²(4x² − x + 16)</li>
          <li><strong>f)</strong> 3x(x − 2)·x(x − 2) − (x − 2) = (x − 2)(3x²(x − 2) − 1)</li>
          <li><strong>g)</strong> 12ax³ − 18a²c² + 24ac³ = 6ac(2x² − 3a + 4c²)</li>
          <li><strong>h)</strong> x(a − b) + y(a + b) (não fatorizável com métodos básicos)</li>
          <li><strong>i)</strong> (x + y)x² − y(x + y) = (x + y)(x² − y)</li>
          <li><strong>j)</strong> (a + 1)x + (a + 1) = (a + 1)(x + 1)</li>
          <li><strong>k)</strong> (x + 1)² + 2(x + 1) = (x + 1)(x + 3)</li>
        </ul>
      </section>

      {/* Desenvolvimento de Binómios */}
      <section>
        <h2 className="text-2xl font-semibold">2. Desenvolvimento de Binómios (Casos Notáveis)</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li><strong>1-a)</strong> (2 + a)² = 4 + 4a + a²</li>
          <li><strong>1-b)</strong> (x + 2y)² = x² + 4xy + 4y²</li>
          <li><strong>1-c)</strong> (2a²b)² = 4a⁴b²</li>
          <li><strong>1-d)</strong> (−xy − y)² = x²y² + 2xy² + y²</li>
          <li><strong>1-e)</strong> (3x − 2y)² = 9x² − 12xy + 4y²</li>
          <li><strong>1-f)</strong> (½ab + ⅓a)² = ¼a²b² + ⅓a²b + 1/9a²</li>
        </ul>
      </section>

      {/* Cálculo Rápido com Diferença de Quadrados */}
      <section>
        <h2 className="text-2xl font-semibold">3. Cálculo com Diferença de Quadrados</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li><strong>3-c)</strong> 89² = (90 − 1)² = 8100 − 180 + 1 = 7921</li>
          <li><strong>3-d)</strong> 19² = (20 − 1)² = 400 − 40 + 1 = 361</li>
          <li><strong>3-e)</strong> 95×105 = (100 − 5)(100 + 5) = 10000 − 25 = 9975</li>
          <li><strong>3-f)</strong> 102² = (100 + 2)² = 10000 + 400 + 4 = 10404</li>
          <li><strong>3-g)</strong> 999² = (1000 − 1)² = 1000000 − 2000 + 1 = 998001</li>
          <li><strong>3-h)</strong> 998×1002 = (1000 − 2)(1000 + 2) = 1000000 − 4 = 999996</li>
          <li><strong>3-i)</strong> 12³ − 11² = 1728 − 121 = 1607</li>
        </ul>
      </section>

      {/* Casos Notáveis: Expressões Algébricas */}
      <section>
        <h2 className="text-2xl font-semibold">4. Casos Notáveis em Expressões Algébricas</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li><strong>4-a)</strong> x² + 6x + q = (x + 3)² (se q = 9)</li>
          <li><strong>4-b)</strong> a² − 4 = (a − 2)(a + 2)</li>
          <li><strong>4-c)</strong> 4x² − 2xy + y² = (2x − y)²</li>
          <li><strong>4-d)</strong> a² (já fatorizado)</li>
        </ul>
      </section>
    </div>
  );
};

export default ExerciciosFatoracao;


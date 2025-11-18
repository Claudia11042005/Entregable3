// Datos de las fórmulas del Formulario 1
const formulas1 = [
    {
        id: 1,
        equation: "∫ du = u + C",
        description: "Integral de una diferencial",
        example: "Ejemplo: ∫ dx = x + C"
    },
    {
        id: 2,
        equation: "∫ a du = au + C",
        description: "donde a es cualquier constante",
        example: "Ejemplo: ∫ 5 dx = 5x + C"
    },
    {
        id: 3,
        equation: "∫ [f(u) + g(u)] du = ∫ f(u) du + ∫ g(u) du",
        description: "Linealidad de la integral",
        example: "Ejemplo: ∫ (x² + 3x) dx = ∫ x² dx + ∫ 3x dx = x³/3 + (3/2)x² + C"
    },
    {
        id: 4,
        equation: "∫ uⁿ du = uⁿ⁺¹/(n+1) + C, n ≠ -1",
        description: "Regla de la potencia para integrales",
        example: "Ejemplo: ∫ x³ dx = x⁴/4 + C"
    },
    {
        id: 5,
        equation: "∫ du/u = ln |u| + C",
        description: "Integral de la función recíproca",
        example: "Ejemplo: ∫ (1/x) dx = ln |x| + C"
    },
    {
        id: 6,
        equation: "∫ aᵘ du = aᵘ/ln(a) + C",
        description: "donde a > 0 y a ≠ 1",
        example: "Ejemplo: ∫ 2ˣ dx = 2ˣ/ln(2) + C"
    },
    {
        id: 7,
        equation: "∫ eᵘ du = eᵘ + C",
        description: "Integral de la función exponencial natural",
        example: "Ejemplo: ∫ eˣ dx = eˣ + C"
    },
    {
        id: 8,
        equation: "∫ sen u du = -cos u + C",
        description: "Integral de la función seno",
        example: "Ejemplo: ∫ sen(x) dx = -cos(x) + C"
    },
    {
        id: 9,
        equation: "∫ cos u du = sen u + C",
        description: "Integral de la función coseno",
        example: "Ejemplo: ∫ cos(x) dx = sen(x) + C"
    },
    {
        id: 10,
        equation: "∫ sec² u du = tan u + C",
        description: "Integral de la secante al cuadrado",
        example: "Ejemplo: ∫ sec²(x) dx = tan(x) + C"
    },
    {
        id: 11,
        equation: "∫ csc² u du = -cot u + C",
        description: "Integral de la cosecante al cuadrado",
        example: "Ejemplo: ∫ csc²(x) dx = -cot(x) + C"
    },
    {
        id: 12,
        equation: "∫ sec u tan u du = sec u + C",
        description: "Integral del producto secante por tangente",
        example: "Ejemplo: ∫ sec(x)tan(x) dx = sec(x) + C"
    },
    {
        id: 13,
        equation: "∫ csc u cot u du = -csc u + C",
        description: "Integral del producto cosecante por cotangente",
        example: "Ejemplo: ∫ csc(x)cot(x) dx = -csc(x) + C"
    },
    {
        id: 14,
        equation: "∫ tan u du = ln |sec u| + C",
        description: "Integral de la función tangente",
        example: "Ejemplo: ∫ tan(x) dx = ln |sec(x)| + C"
    },
    {
        id: 15,
        equation: "∫ cot u du = ln |sen u| + C",
        description: "Integral de la función cotangente",
        example: "Ejemplo: ∫ cot(x) dx = ln |sen(x)| + C"
    },
    {
        id: 16,
        equation: "∫ sec u du = ln |sec u + tan u| + C",
        description: "Integral de la función secante",
        example: "Ejemplo: ∫ sec(x) dx = ln |sec(x) + tan(x)| + C"
    },
    {
        id: 17,
        equation: "∫ csc u du = ln |csc u - cot u| + C",
        description: "Integral de la función cosecante",
        example: "Ejemplo: ∫ csc(x) dx = ln |csc(x) - cot(x)| + C"
    },
    {
        id: 18,
        equation: "∫ du/√(a² - u²) = sen⁻¹(u/a) + C, donde a > 0",
        description: "Integral que resulta en arcoseno",
        example: "Ejemplo: ∫ dx/√(4 - x²) = sen⁻¹(x/2) + C"
    },
    {
        id: 19,
        equation: "∫ du/(a² + u²) = (1/a) tan⁻¹(u/a) + C, donde a ≠ 0",
        description: "Integral que resulta en arcotangente",
        example: "Ejemplo: ∫ dx/(4 + x²) = (1/2) tan⁻¹(x/2) + C"
    },
    {
        id: 20,
        equation: "∫ du/(u√(u² - a²)) = (1/a) sec⁻¹(u/a) + C, donde a > 0",
        description: "Integral que resulta en arcosecante",
        example: "Ejemplo: ∫ dx/(x√(x² - 4)) = (1/2) sec⁻¹(x/2) + C"
    },
    {
        id: 21,
        equation: "∫ sech u du = cosh u + C",
        description: "Integral de la secante hiperbólica",
        example: "Ejemplo: ∫ sech(x) dx = cosh(x) + C"
    },
    {
        id: 22,
        equation: "∫ cosh u du = sech u + C",
        description: "Integral del coseno hiperbólico",
        example: "Ejemplo: ∫ cosh(x) dx = sech(x) + C"
    },
    {
        id: 23,
        equation: "∫ sech² u du = tanh u + C",
        description: "Integral de la secante hiperbólica al cuadrado",
        example: "Ejemplo: ∫ sech²(x) dx = tanh(x) + C"
    },
    {
        id: 24,
        equation: "∫ csch² u du = -coth u + C",
        description: "Integral de la cosecante hiperbólica al cuadrado",
        example: "Ejemplo: ∫ csch²(x) dx = -coth(x) + C"
    },
    {
        id: 25,
        equation: "∫ sech u tanh u du = -sech u + C",
        description: "Integral del producto secante hiperbólica por tangente hiperbólica",
        example: "Ejemplo: ∫ sech(x)tanh(x) dx = -sech(x) + C"
    },
    {
        id: 26,
        equation: "∫ csch u coth u du = -csch u + C",
        description: "Integral del producto cosecante hiperbólica por cotangente hiperbólica",
        example: "Ejemplo: ∫ csch(x)coth(x) dx = -csch(x) + C"
    },
    {
        id: 27,
        equation: "∫ du/√(u² + a²) = sech⁻¹(u/a) + C = ln(u + √(u² + a²)) + C, si a > 0",
        description: "Integral que resulta en arcosecante hiperbólica",
        example: "Ejemplo: ∫ dx/√(x² + 9) = ln(x + √(x² + 9)) + C"
    },
    {
        id: 28,
        equation: "∫ du/√(u² - a²) = cosh⁻¹(u/a) + C = ln(u + √(u² - a²)) + C, si u > a > 0",
        description: "Integral que resulta en arcocoseno hiperbólico",
        example: "Ejemplo: ∫ dx/√(x² - 4) = ln(x + √(x² - 4)) + C"
    },
    {
        id: 29,
        equation: "∫ du/(a² - u²) = (1/a) tanh⁻¹(u/a) + C si |u| < a, (1/a) coth⁻¹(u/a) + C si |u| > a = (1/(2a)) ln|(a+u)/(a-u)| + C, si u ≠ a y a ≠ 0",
        description: "Integral que resulta en arcotangente o arcocotangente hiperbólica",
        example: "Ejemplo: ∫ dx/(9 - x²) = (1/6) ln|(3+x)/(3-x)| + C"
    }
];

// Datos de las fórmulas del Formulario 2 (COMPLETO)
const formulas2 = [
    // Trigonometría de ángulo recto
    {
        id: 1,
        category: "Trigonometría de ángulo recto",
        equation: "sen θ = op/hip, csc θ = hip/op",
        description: "Definiciones trigonométricas básicas",
        example: "Ejemplo: En un triángulo rectángulo con catetos 3 y 4, e hipotenusa 5: sen θ = 3/5, csc θ = 5/3"
    },
    {
        id: 2,
        category: "Trigonometría de ángulo recto",
        equation: "cos θ = ady/hip, sec θ = hip/ady",
        description: "Definiciones trigonométricas básicas",
        example: "Ejemplo: En un triángulo rectángulo con catetos 3 y 4, e hipotenusa 5: cos θ = 4/5, sec θ = 5/4"
    },
    {
        id: 3,
        category: "Trigonometría de ángulo recto",
        equation: "tan θ = op/ady, cot θ = ady/op",
        description: "Definiciones trigonométricas básicas",
        example: "Ejemplo: En un triángulo rectángulo con catetos 3 y 4, e hipotenusa 5: tan θ = 3/4, cot θ = 4/3"
    },
    // Funciones trigonométricas
    {
        id: 4,
        category: "Funciones trigonométricas",
        equation: "sen θ = y/r, csc θ = r/y",
        description: "Definiciones en el círculo unitario",
        example: "Ejemplo: Para un ángulo θ en posición estándar con punto terminal (3,4): sen θ = 4/5, csc θ = 5/4"
    },
    {
        id: 5,
        category: "Funciones trigonométricas",
        equation: "cos θ = x/r, sec θ = r/x",
        description: "Definiciones en el círculo unitario",
        example: "Ejemplo: Para un ángulo θ en posición estándar con punto terminal (3,4): cos θ = 3/5, sec θ = 5/3"
    },
    {
        id: 6,
        category: "Funciones trigonométricas",
        equation: "tan θ = y/x, cot θ = x/y",
        description: "Definiciones en el círculo unitario",
        example: "Ejemplo: Para un ángulo θ en posición estándar con punto terminal (3,4): tan θ = 4/3, cot θ = 3/4"
    },
    // Fórmulas del ángulo doble
    {
        id: 7,
        category: "Fórmulas del ángulo doble",
        equation: "sen 2x = 2 sen x cos x",
        description: "Identidad del ángulo doble para seno",
        example: "Ejemplo: sen(60°) = 2 sen(30°) cos(30°) = 2*(1/2)*(√3/2) = √3/2"
    },
    {
        id: 8,
        category: "Fórmulas del ángulo doble",
        equation: "cos 2x = cos² x - sen² x = 2 cos² x - 1 = 1 - 2 sen² x",
        description: "Identidades del ángulo doble para coseno",
        example: "Ejemplo: cos(60°) = cos²(30°) - sen²(30°) = (√3/2)² - (1/2)² = 3/4 - 1/4 = 1/2"
    },
    {
        id: 9,
        category: "Fórmulas del ángulo doble",
        equation: "tan 2x = (2 tan x)/(1 - tan² x)",
        description: "Identidad del ángulo doble para tangente",
        example: "Ejemplo: tan(60°) = (2 tan(30°))/(1 - tan²(30°)) = (2*(√3/3))/(1 - (√3/3)²) = √3"
    },
    // Fórmulas del ángulo medio
    {
        id: 10,
        category: "Fórmulas del ángulo medio",
        equation: "sen² x = (1 - cos 2x)/2",
        description: "Identidad del ángulo medio para seno",
        example: "Ejemplo: sen²(30°) = (1 - cos(60°))/2 = (1 - 1/2)/2 = 1/4"
    },
    {
        id: 11,
        category: "Fórmulas del ángulo medio",
        equation: "cos² x = (1 + cos 2x)/2",
        description: "Identidad del ángulo medio para coseno",
        example: "Ejemplo: cos²(30°) = (1 + cos(60°))/2 = (1 + 1/2)/2 = 3/4"
    },
    // Identidades fundamentales
    {
        id: 12,
        category: "Identidades fundamentales",
        equation: "csc θ = 1/sen θ, sec θ = 1/cos θ",
        description: "Identidades recíprocas",
        example: "Ejemplo: Si sen θ = 3/5, entonces csc θ = 5/3"
    },
    {
        id: 13,
        category: "Identidades fundamentales",
        equation: "tan θ = sen θ/cos θ, cot θ = cos θ/sen θ",
        description: "Identidades de cociente",
        example: "Ejemplo: Si sen θ = 3/5 y cos θ = 4/5, entonces tan θ = (3/5)/(4/5) = 3/4"
    },
    {
        id: 14,
        category: "Identidades fundamentales",
        equation: "cot θ = 1/tan θ, sen² θ + cos² θ = 1",
        description: "Identidades recíprocas y pitagóricas",
        example: "Ejemplo: Si sen θ = 3/5 y cos θ = 4/5, entonces sen² θ + cos² θ = (9/25) + (16/25) = 25/25 = 1"
    },
    {
        id: 15,
        category: "Identidades fundamentales",
        equation: "1 + tan² θ = sec² θ, 1 + cot² θ = csc² θ",
        description: "Identidades pitagóricas",
        example: "Ejemplo: Si tan θ = 3/4, entonces sec² θ = 1 + (9/16) = 25/16, por lo que sec θ = 5/4"
    },
    {
        id: 16,
        category: "Identidades fundamentales",
        equation: "sen(-θ) = -sen θ, cos(-θ) = cos θ",
        description: "Identidades de paridad",
        example: "Ejemplo: sen(-30°) = -sen(30°) = -1/2, cos(-30°) = cos(30°) = √3/2"
    },
    {
        id: 17,
        category: "Identidades fundamentales",
        equation: "tan(-θ) = -tan θ, sen(π/2 - θ) = cos θ",
        description: "Identidades de paridad y cofunción",
        example: "Ejemplo: tan(-45°) = -tan(45°) = -1, sen(π/2 - 30°) = cos(30°) = √3/2"
    },
    {
        id: 18,
        category: "Identidades fundamentales",
        equation: "cos(π/2 - θ) = sen θ, tan(π/2 - θ) = cot θ",
        description: "Identidades de cofunción",
        example: "Ejemplo: cos(π/2 - 60°) = sen(60°) = √3/2, tan(π/2 - 45°) = cot(45°) = 1"
    },
    // Tabla de sustituciones trigonométricas
    {
        id: 19,
        category: "Sustituciones trigonométricas",
        equation: "√(a² - x²) → x = a sen θ, -π/2 ≤ θ ≤ π/2",
        description: "Sustitución para expresiones con raíz cuadrada de a² - x²",
        example: "Ejemplo: Para integrar ∫√(9 - x²) dx, usar x = 3 sen θ, entonces dx = 3 cos θ dθ"
    },
    {
        id: 20,
        category: "Sustituciones trigonométricas",
        equation: "√(a² + x²) → x = a tan θ, -π/2 < θ < π/2",
        description: "Sustitución para expresiones con raíz cuadrada de a² + x²",
        example: "Ejemplo: Para integrar ∫√(4 + x²) dx, usar x = 2 tan θ, entonces dx = 2 sec² θ dθ"
    },
    {
        id: 21,
        category: "Sustituciones trigonométricas",
        equation: "√(x² - a²) → x = a sec θ, 0 ≤ θ < π/2 o π ≤ θ < 3π/2",
        description: "Sustitución para expresiones con raíz cuadrada de x² - a²",
        example: "Ejemplo: Para integrar ∫√(x² - 16) dx, usar x = 4 sec θ, entonces dx = 4 sec θ tan θ dθ"
    },
    // Integrales básicas
    {
        id: 22,
        category: "Integrales básicas",
        equation: "∫ u dv = uv - ∫ v du",
        description: "Integración por partes",
        example: "Ejemplo: ∫ x eˣ dx = x eˣ - ∫ eˣ dx = x eˣ - eˣ + C"
    },
    {
        id: 23,
        category: "Integrales básicas",
        equation: "∫ uⁿ du = uⁿ⁺¹/(n+1) + C, n ≠ -1",
        description: "Regla de la potencia para integrales",
        example: "Ejemplo: ∫ x³ dx = x⁴/4 + C"
    },
    {
        id: 24,
        category: "Integrales básicas",
        equation: "∫ du/u = ln |u| + C",
        description: "Integral de la función recíproca",
        example: "Ejemplo: ∫ (1/x) dx = ln |x| + C"
    },
    {
        id: 25,
        category: "Integrales básicas",
        equation: "∫ eᵘ du = eᵘ + C",
        description: "Integral de la función exponencial natural",
        example: "Ejemplo: ∫ eˣ dx = eˣ + C"
    },
    {
        id: 26,
        category: "Integrales básicas",
        equation: "∫ bᵘ du = bᵘ/ln(b) + C",
        description: "Integral de la función exponencial con base b",
        example: "Ejemplo: ∫ 2ˣ dx = 2ˣ/ln(2) + C"
    },
    {
        id: 27,
        category: "Integrales básicas",
        equation: "∫ sen u du = -cos u + C",
        description: "Integral de la función seno",
        example: "Ejemplo: ∫ sen(x) dx = -cos(x) + C"
    },
    {
        id: 28,
        category: "Integrales básicas",
        equation: "∫ cos u du = sen u + C",
        description: "Integral de la función coseno",
        example: "Ejemplo: ∫ cos(x) dx = sen(x) + C"
    },
    {
        id: 29,
        category: "Integrales básicas",
        equation: "∫ sec² u du = tan u + C",
        description: "Integral de la secante al cuadrado",
        example: "Ejemplo: ∫ sec²(x) dx = tan(x) + C"
    },
    {
        id: 30,
        category: "Integrales básicas",
        equation: "∫ csc² u du = -cot u + C",
        description: "Integral de la cosecante al cuadrado",
        example: "Ejemplo: ∫ csc²(x) dx = -cot(x) + C"
    },
    {
        id: 31,
        category: "Integrales básicas",
        equation: "∫ sec u tan u du = sec u + C",
        description: "Integral del producto secante por tangente",
        example: "Ejemplo: ∫ sec(x)tan(x) dx = sec(x) + C"
    },
    {
        id: 32,
        category: "Integrales básicas",
        equation: "∫ csc u cot u du = -csc u + C",
        description: "Integral del producto cosecante por cotangente",
        example: "Ejemplo: ∫ csc(x)cot(x) dx = -csc(x) + C"
    },
    {
        id: 33,
        category: "Integrales básicas",
        equation: "∫ tan u du = ln |sec u| + C",
        description: "Integral de la función tangente",
        example: "Ejemplo: ∫ tan(x) dx = ln |sec(x)| + C"
    },
    {
        id: 34,
        category: "Integrales básicas",
        equation: "∫ cot u du = ln |sen u| + C",
        description: "Integral de la función cotangente",
        example: "Ejemplo: ∫ cot(x) dx = ln |sen(x)| + C"
    },
    {
        id: 35,
        category: "Integrales básicas",
        equation: "∫ sec u du = ln |sec u + tan u| + C",
        description: "Integral de la función secante",
        example: "Ejemplo: ∫ sec(x) dx = ln |sec(x) + tan(x)| + C"
    },
    {
        id: 36,
        category: "Integrales básicas",
        equation: "∫ csc u du = ln |csc u - cot u| + C",
        description: "Integral de la función cosecante",
        example: "Ejemplo: ∫ csc(x) dx = ln |csc(x) - cot(x)| + C"
    },
    {
        id: 37,
        category: "Integrales básicas",
        equation: "∫ du/√(a² - u²) = sen⁻¹(u/a) + C, a > 0",
        description: "Integral que resulta en arcoseno",
        example: "Ejemplo: ∫ dx/√(4 - x²) = sen⁻¹(x/2) + C"
    },
    {
        id: 38,
        category: "Integrales básicas",
        equation: "∫ du/(a² + u²) = (1/a) tan⁻¹(u/a) + C",
        description: "Integral que resulta en arcotangente",
        example: "Ejemplo: ∫ dx/(4 + x²) = (1/2) tan⁻¹(x/2) + C"
    },
    {
        id: 39,
        category: "Integrales básicas",
        equation: "∫ du/(u√(u² - a²)) = (1/a) sec⁻¹(u/a) + C",
        description: "Integral que resulta en arcosecante",
        example: "Ejemplo: ∫ dx/(x√(x² - 4)) = (1/2) sec⁻¹(x/2) + C"
    },
    {
        id: 40,
        category: "Integrales básicas",
        equation: "∫ du/(a² - u²) = (1/(2a)) ln |(u+a)/(u-a)| + C",
        description: "Integral de función racional con diferencia de cuadrados",
        example: "Ejemplo: ∫ dx/(9 - x²) = (1/6) ln |(3+x)/(3-x)| + C"
    },
    {
        id: 41,
        category: "Integrales básicas",
        equation: "∫ du/(u² - a²) = (1/(2a)) ln |(u-a)/(u+a)| + C",
        description: "Integral de función racional con diferencia de cuadrados (alternativa)",
        example: "Ejemplo: ∫ dx/(x² - 9) = (1/6) ln |(x-3)/(x+3)| + C"
    },
    // Integrales con √(a² + u²)
    {
        id: 42,
        category: "Integrales con √(a² + u²)",
        equation: "∫ √(a² + u²) du = (u/2)√(a² + u²) + (a²/2) ln(u + √(a² + u²)) + C",
        description: "Integral de raíz cuadrada de a² + u²",
        example: "Ejemplo: ∫ √(4 + x²) dx = (x/2)√(4 + x²) + 2 ln(x + √(4 + x²)) + C"
    },
    {
        id: 43,
        category: "Integrales con √(a² + u²)",
        equation: "∫ u² √(a² + u²) du = (u/8)(a² + 2u²)√(a² + u²) - (a⁴/8) ln(u + √(a² + u²)) + C",
        description: "Integral de u² por raíz cuadrada de a² + u²",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 44,
        category: "Integrales con √(a² + u²)",
        equation: "∫ √(a² + u²)/u du = √(a² + u²) - a ln |(a + √(a² + u²))/u| + C",
        description: "Integral de raíz cuadrada de a² + u² dividida por u",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    // Integrales con √(a² - u²)
    {
        id: 45,
        category: "Integrales con √(a² - u²)",
        equation: "∫ √(a² - u²) du = (u/2)√(a² - u²) + (a²/2) sen⁻¹(u/a) + C",
        description: "Integral de raíz cuadrada de a² - u²",
        example: "Ejemplo: ∫ √(9 - x²) dx = (x/2)√(9 - x²) + (9/2) sen⁻¹(x/3) + C"
    },
    {
        id: 46,
        category: "Integrales con √(a² - u²)",
        equation: "∫ u² √(a² - u²) du = (u/8)(2u² - a²)√(a² - u²) + (a⁴/8) sen⁻¹(u/a) + C",
        description: "Integral de u² por raíz cuadrada de a² - u²",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 47,
        category: "Integrales con √(a² - u²)",
        equation: "∫ √(a² - u²)/u du = √(a² - u²) - a ln |(a + √(a² - u²))/u| + C",
        description: "Integral de raíz cuadrada de a² - u² dividida por u",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    // Integrales con √(u² - a²)
    {
        id: 48,
        category: "Integrales con √(u² - a²)",
        equation: "∫ √(u² - a²) du = (u/2)√(u² - a²) - (a²/2) ln |u + √(u² - a²)| + C",
        description: "Integral de raíz cuadrada de u² - a²",
        example: "Ejemplo: ∫ √(x² - 4) dx = (x/2)√(x² - 4) - 2 ln |x + √(x² - 4)| + C"
    },
    {
        id: 49,
        category: "Integrales con √(u² - a²)",
        equation: "∫ u² √(u² - a²) du = (u/8)(2u² - a²)√(u² - a²) - (a⁴/8) ln |u + √(u² - a²)| + C",
        description: "Integral de u² por raíz cuadrada de u² - a²",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 50,
        category: "Integrales con √(u² - a²)",
        equation: "∫ √(u² - a²)/u du = √(u² - a²) - a cos⁻¹(a/|u|) + C",
        description: "Integral de raíz cuadrada de u² - a² dividida por u",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    // Integrales con a + bu
    {
        id: 51,
        category: "Integrales con a + bu",
        equation: "∫ u/(a + bu) du = (1/b²)(a + bu - a ln |a + bu|) + C",
        description: "Integral de u dividido por a + bu",
        example: "Ejemplo: ∫ x/(2 + 3x) dx = (1/9)(2 + 3x - 2 ln |2 + 3x|) + C"
    },
    {
        id: 52,
        category: "Integrales con a + bu",
        equation: "∫ u²/(a + bu) du = (1/(2b³))[(a + bu)² - 4a(a + bu) + 2a² ln |a + bu|] + C",
        description: "Integral de u² dividido por a + bu",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 53,
        category: "Integrales con a + bu",
        equation: "∫ du/(u(a + bu)) = (1/a) ln |u/(a + bu)| + C",
        description: "Integral de 1 dividido por u(a + bu)",
        example: "Ejemplo: ∫ dx/(x(2 + 3x)) = (1/2) ln |x/(2 + 3x)| + C"
    },
    // Integrales trigonométricas
    {
        id: 54,
        category: "Integrales trigonométricas",
        equation: "∫ sen² u du = u/2 - (sen(2u))/4 + C",
        description: "Integral de seno al cuadrado",
        example: "Ejemplo: ∫ sen²(x) dx = x/2 - sen(2x)/4 + C"
    },
    {
        id: 55,
        category: "Integrales trigonométricas",
        equation: "∫ cos² u du = u/2 + (sen(2u))/4 + C",
        description: "Integral de coseno al cuadrado",
        example: "Ejemplo: ∫ cos²(x) dx = x/2 + sen(2x)/4 + C"
    },
    {
        id: 56,
        category: "Integrales trigonométricas",
        equation: "∫ tan² u du = tan u - u + C",
        description: "Integral de tangente al cuadrado",
        example: "Ejemplo: ∫ tan²(x) dx = tan(x) - x + C"
    },
    {
        id: 57,
        category: "Integrales trigonométricas",
        equation: "∫ cot² u du = -cot u - u + C",
        description: "Integral de cotangente al cuadrado",
        example: "Ejemplo: ∫ cot²(x) dx = -cot(x) - x + C"
    },
    // Integrales exponenciales y logarítmicas
    {
        id: 58,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ u eᵘ du = (u - 1)eᵘ + C",
        description: "Integral de u por eᵘ",
        example: "Ejemplo: ∫ x eˣ dx = (x - 1)eˣ + C"
    },
    {
        id: 59,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ eᵘ sen(bu) du = eᵘ/(a² + b²)(a sen(bu) - b cos(bu)) + C",
        description: "Integral de eᵘ por sen(bu)",
        example: "Ejemplo: ∫ eˣ sen(x) dx = eˣ/2 (sen(x) - cos(x)) + C"
    },
    {
        id: 60,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ eᵘ cos(bu) du = eᵘ/(a² + b²)(a cos(bu) + b sen(bu)) + C",
        description: "Integral de eᵘ por cos(bu)",
        example: "Ejemplo: ∫ eˣ cos(x) dx = eˣ/2 (cos(x) + sen(x)) + C"
    },
    // Integrales hiperbólicas
    {
        id: 61,
        category: "Integrales hiperbólicas",
        equation: "∫ senh u du = cosh u + C",
        description: "Integral del seno hiperbólico",
        example: "Ejemplo: ∫ senh(x) dx = cosh(x) + C"
    },
    {
        id: 62,
        category: "Integrales hiperbólicas",
        equation: "∫ cosh u du = senh u + C",
        description: "Integral del coseno hiperbólico",
        example: "Ejemplo: ∫ cosh(x) dx = senh(x) + C"
    },
    {
        id: 63,
        category: "Integrales hiperbólicas",
        equation: "∫ tanh u du = ln |cosh u| + C",
        description: "Integral de la tangente hiperbólica",
        example: "Ejemplo: ∫ tanh(x) dx = ln |cosh(x)| + C"
    },
    {
        id: 64,
        category: "Integrales hiperbólicas",
        equation: "∫ coth u du = ln |senh u| + C",
        description: "Integral de la cotangente hiperbólica",
        example: "Ejemplo: ∫ coth(x) dx = ln |senh(x)| + C"
    },
    // Integrales con √(2au - u²)
    {
        id: 65,
        category: "Integrales con √(2au - u²)",
        equation: "∫ √(2au - u²) du = ((u - a)/2)√(2au - u²) + (a²/2) cos⁻¹((a - u)/a) + C",
        description: "Integral de raíz cuadrada de 2au - u²",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 66,
        category: "Integrales con √(2au - u²)",
        equation: "∫ u √(2au - u²) du = ((2u² - au - 3a²)/6)√(2au - u²) + (a³/2) cos⁻¹((a - u)/a) + C",
        description: "Integral de u por raíz cuadrada de 2au - u²",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    },
    {
        id: 67,
        category: "Integrales con √(2au - u²)",
        equation: "∫ √(2au - u²)/u du = √(2au - u²) + a cos⁻¹((a - u)/a) + C",
        description: "Integral de raíz cuadrada de 2au - u² dividida por u",
        example: "Ejemplo demasiado complejo para mostrar aquí"
    
    }, 

    // Agregar ESTE código después de la definición de formulas2 actual (después de la fórmula 67)

// Continuación de fórmulas del Formulario 2

    {
        id: 68,
        category: "Integrales trigonométricas",
        equation: "∫ sec² u du = -½(2 + sec² u) cos u + C",
        description: "Integral de secante al cuadrado (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de sec² u"
    },
    {
        id: 69,
        category: "Integrales trigonométricas", 
        equation: "∫ csc² u du = ½(2 + csc² u) sen u + C",
        description: "Integral de cosecante al cuadrado (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de csc² u"
    },
    {
        id: 70,
        category: "Integrales trigonométricas",
        equation: "∫ tan² u du = ½ tan² u + ln |cos u| + C",
        description: "Integral de tangente al cuadrado (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de tan² u"
    },
    {
        id: 71,
        category: "Integrales trigonométricas",
        equation: "∫ cot² u du = -½ cot² u - ln |sen u| + C", 
        description: "Integral de cotangente al cuadrado (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de cot² u"
    },
    {
        id: 72,
        category: "Integrales trigonométricas",
        equation: "∫ sec u du = ½ sec u tan u + ½ ln |sec u + tan u| + C",
        description: "Integral de secante (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de sec u"
    },
    {
        id: 73,
        category: "Integrales trigonométricas",
        equation: "∫ csc u du = -½ csc u cot u + ½ ln |csc u - cot u| + C",
        description: "Integral de cosecante (forma alternativa)",
        example: "Ejemplo: Forma alternativa de integral de csc u"
    },
    // Integrales con potencias de funciones trigonométricas
    {
        id: 74,
        category: "Integrales trigonométricas",
        equation: "∫ secⁿ u du = (1/(n-1)) tan u secⁿ⁻² u + ((n-2)/(n-1)) ∫ secⁿ⁻² u du",
        description: "Fórmula de reducción para secante a la n",
        example: "Ejemplo: ∫ sec³ x dx = ½ sec x tan x + ½ ln |sec x + tan x| + C"
    },
    {
        id: 75,
        category: "Integrales trigonométricas",
        equation: "∫ cscⁿ u du = (-1/(n-1)) cot u cscⁿ⁻² u + ((n-2)/(n-1)) ∫ cscⁿ⁻² u du",
        description: "Fórmula de reducción para cosecante a la n", 
        example: "Ejemplo: Fórmula de reducción para integrales de cscⁿ u"
    },
    {
        id: 76,
        category: "Integrales trigonométricas",
        equation: "∫ tanⁿ u du = (1/(n-1)) tanⁿ⁻¹ u - ∫ tanⁿ⁻² u du",
        description: "Fórmula de reducción para tangente a la n",
        example: "Ejemplo: ∫ tan³ x dx = ½ tan² x - ln |cos x| + C"
    },
    {
        id: 77,
        category: "Integrales trigonométricas",
        equation: "∫ cotⁿ u du = (-1/(n-1)) cotⁿ⁻¹ u - ∫ cotⁿ⁻² u du",
        description: "Fórmula de reducción para cotangente a la n",
        example: "Ejemplo: Fórmula de reducción para integrales de cotⁿ u"
    },
    // Integrales de productos de funciones trigonométricas
    {
        id: 78,
        category: "Integrales trigonométricas",
        equation: "∫ sen au sen bu du = sen((a-b)u)/(2(a-b)) - sen((a+b)u)/(2(a+b)) + C",
        description: "Integral del producto de senos con diferentes frecuencias",
        example: "Ejemplo: ∫ sen(2x) sen(3x) dx = sen(-x)/(-2) - sen(5x)/10 + C"
    },
    {
        id: 79,
        category: "Integrales trigonométricas",
        equation: "∫ cos au cos bu du = sen((a-b)u)/(2(a-b)) + sen((a+b)u)/(2(a+b)) + C", 
        description: "Integral del producto de cosenos con diferentes frecuencias",
        example: "Ejemplo: ∫ cos(2x) cos(3x) dx = sen(-x)/(-2) + sen(5x)/10 + C"
    },
    {
        id: 80,
        category: "Integrales trigonométricas",
        equation: "∫ sen au cos bu du = -cos((a-b)u)/(2(a-b)) - cos((a+b)u)/(2(a+b)) + C",
        description: "Integral del producto de seno por coseno con diferentes frecuencias",
        example: "Ejemplo: ∫ sen(2x) cos(3x) dx = -cos(-x)/(-2) - cos(5x)/10 + C"
    },
    // Integrales con funciones trigonométricas inversas
    {
        id: 81,
        category: "Integrales con funciones inversas",
        equation: "∫ sen⁻¹ u du = u sen⁻¹ u + √(1 - u²) + C",
        description: "Integral del arcoseno",
        example: "Ejemplo: ∫ sen⁻¹ x dx = x sen⁻¹ x + √(1 - x²) + C"
    },
    {
        id: 82,
        category: "Integrales con funciones inversas", 
        equation: "∫ cos⁻¹ u du = u cos⁻¹ u - √(1 - u²) + C",
        description: "Integral del arcocoseno",
        example: "Ejemplo: ∫ cos⁻¹ x dx = x cos⁻¹ x - √(1 - x²) + C"
    },
    {
        id: 83,
        category: "Integrales con funciones inversas",
        equation: "∫ tan⁻¹ u du = u tan⁻¹ u - ½ ln(1 + u²) + C",
        description: "Integral del arcotangente",
        example: "Ejemplo: ∫ tan⁻¹ x dx = x tan⁻¹ x - ½ ln(1 + x²) + C"
    },
    {
        id: 84,
        category: "Integrales con funciones inversas",
        equation: "∫ u sen⁻¹ u du = ((2u² - 1)/4) sen⁻¹ u + (u√(1 - u²))/4 + C",
        description: "Integral de u por arcoseno",
        example: "Ejemplo: ∫ x sen⁻¹ x dx = ((2x² - 1)/4) sen⁻¹ x + (x√(1 - x²))/4 + C"
    },
    {
        id: 85,
        category: "Integrales con funciones inversas",
        equation: "∫ u cos⁻¹ u du = ((2u² - 1)/4) cos⁻¹ u - (u√(1 - u²))/4 + C",
        description: "Integral de u por arcocoseno", 
        example: "Ejemplo: ∫ x cos⁻¹ x dx = ((2x² - 1)/4) cos⁻¹ x - (x√(1 - x²))/4 + C"
    },
    {
        id: 86,
        category: "Integrales con funciones inversas",
        equation: "∫ u tan⁻¹ u du = ((u² + 1)/2) tan⁻¹ u - u/2 + C",
        description: "Integral de u por arcotangente",
        example: "Ejemplo: ∫ x tan⁻¹ x dx = ((x² + 1)/2) tan⁻¹ x - x/2 + C"
    },
    // Integrales con potencias de funciones inversas
    {
        id: 87,
        category: "Integrales con funciones inversas",
        equation: "∫ uⁿ sen⁻¹ u du = (1/(n+1))[uⁿ⁺¹ sen⁻¹ u - ∫ (uⁿ⁺¹/√(1 - u²)) du], n ≠ -1",
        description: "Integral de uⁿ por arcoseno",
        example: "Ejemplo: Fórmula de reducción para uⁿ sen⁻¹ u"
    },
    {
        id: 88,
        category: "Integrales con funciones inversas",
        equation: "∫ uⁿ cos⁻¹ u du = (1/(n+1))[uⁿ⁺¹ cos⁻¹ u + ∫ (uⁿ⁺¹/√(1 - u²)) du], n ≠ -1", 
        description: "Integral de uⁿ por arcocoseno",
        example: "Ejemplo: Fórmula de reducción para uⁿ cos⁻¹ u"
    },
    {
        id: 89,
        category: "Integrales con funciones inversas",
        equation: "∫ uⁿ tan⁻¹ u du = (1/(n+1))[uⁿ⁺¹ tan⁻¹ u - ∫ (uⁿ⁺¹/(1 + u²)) du], n ≠ -1",
        description: "Integral de uⁿ por arcotangente",
        example: "Ejemplo: Fórmula de reducción para uⁿ tan⁻¹ u"
    },
    // Integrales exponenciales y logarítmicas (continuación)
    {
        id: 90,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ u eᵘ du = (u - 1)eᵘ + C",
        description: "Integral de u por eᵘ",
        example: "Ejemplo: ∫ x eˣ dx = (x - 1)eˣ + C"
    },
    {
        id: 91,
        category: "Integrales exponenciales y logarítmicas", 
        equation: "∫ uⁿ eᵘ du = uⁿ eᵘ - n ∫ uⁿ⁻¹ eᵘ du",
        description: "Fórmula de reducción para uⁿ eᵘ",
        example: "Ejemplo: ∫ x² eˣ dx = x² eˣ - 2∫ x eˣ dx"
    },
    {
        id: 92,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ eᵘ sen bu du = eᵘ/(a² + b²)(a sen bu - b cos bu) + C",
        description: "Integral de eᵘ por sen bu",
        example: "Ejemplo: ∫ eˣ sen x dx = eˣ/2 (sen x - cos x) + C"
    },
    {
        id: 93,
        category: "Integrales exponenciales y logarítmicas",
        equation: "∫ eᵘ cos bu du = eᵘ/(a² + b²)(a cos bu + b sen bu) + C",
        description: "Integral de eᵘ por cos bu",
        example: "Ejemplo: ∫ eˣ cos x dx = eˣ/2 (cos x + sen x) + C"
    },
    // Integrales hiperbólicas (continuación)
    {
        id: 94,
        category: "Integrales hiperbólicas",
        equation: "∫ senh u du = cosh u + C",
        description: "Integral del seno hiperbólico",
        example: "Ejemplo: ∫ senh x dx = cosh x + C"
    },
    {
        id: 95,
        category: "Integrales hiperbólicas",
        equation: "∫ cosh u du = senh u + C", 
        description: "Integral del coseno hiperbólico",
        example: "Ejemplo: ∫ cosh x dx = senh x + C"
    },
    {
        id: 96,
        category: "Integrales hiperbólicas",
        equation: "∫ tanh u du = ln |cosh u| + C",
        description: "Integral de la tangente hiperbólica",
        example: "Ejemplo: ∫ tanh x dx = ln |cosh x| + C"
    },
    {
        id: 97,
        category: "Integrales hiperbólicas",
        equation: "∫ coth u du = ln |senh u| + C",
        description: "Integral de la cotangente hiperbólica",
        example: "Ejemplo: ∫ coth x dx = ln |senh x| + C"
    },
    {
        id: 98,
        category: "Integrales hiperbólicas",
        equation: "∫ sech u du = tan⁻¹ |senh u| + C",
        description: "Integral de la secante hiperbólica",
        example: "Ejemplo: ∫ sech x dx = 2 tan⁻¹(eˣ) + C"
    },
    // Integrales con √(2au - u²) (continuación)
    {
        id: 99,
        category: "Integrales con √(2au - u²)",
        equation: "∫ √(2au - u²) du = ((u - a)/2)√(2au - u²) + (a²/2) cos⁻¹((a - u)/a) + C",
        description: "Integral de raíz cuadrada de 2au - u²",
        example: "Ejemplo: Integral para completar el cuadrado en expresiones cuadráticas"
    },
    {
        id: 100,
        category: "Integrales con √(2au - u²)",
        equation: "∫ u √(2au - u²) du = ((2u² - au - 3a²)/6)√(2au - u²) + (a³/2) cos⁻¹((a - u)/a) + C",
        description: "Integral de u por raíz cuadrada de 2au - u²",
        example: "Ejemplo: Integral que aparece en problemas de física"
    },
    {
        id: 101,
        category: "Integrales con √(2au - u²)", 
        equation: "∫ √(2au - u²)/u du = √(2au - u²) + a cos⁻¹((a - u)/a) + C",
        description: "Integral de raíz cuadrada de 2au - u² dividida por u",
        example: "Ejemplo: Forma alternativa para integrales con completación de cuadrados"
    },
    {
        id: 102,
        category: "Integrales con √(2au - u²)",
        equation: "∫ √(2au - u²)/u² du = -2√(2au - u²)/u - cos⁻¹((a - u)/a) + C",
        description: "Integral de raíz cuadrada de 2au - u² dividida por u²",
        example: "Ejemplo: Forma para integrales con denominador u²"
    },
    {
        id: 103,
        category: "Integrales con √(2au - u²)",
        equation: "∫ du/√(2au - u²) = cos⁻¹((a - u)/a) + C",
        description: "Integral de 1 sobre raíz cuadrada de 2au - u²",
        example: "Ejemplo: ∫ dx/√(2ax - x²) = cos⁻¹((a - x)/a) + C"
    },
    {
        id: 104,
        category: "Integrales con √(2au - u²)",
        equation: "∫ u du/√(2au - u²) = -√(2au - u²) + a cos⁻¹((a - u)/a) + C",
        description: "Integral de u sobre raíz cuadrada de 2au - u²",
        example: "Ejemplo: Integral que aparece en problemas de centroides"
    },
    {
        id: 105,
        category: "Integrales con √(2au - u²)",
        equation: "∫ u² du/√(2au - u²) = -((u + 3a)/2)√(2au - u²) + (3a²/2) cos⁻¹((a - u)/a) + C",
        description: "Integral de u² sobre raíz cuadrada de 2au - u²",
        example: "Ejemplo: Integral para momentos de inercia"
    },
    {
        id: 106,
        category: "Integrales con √(2au - u²)",
        equation: "∫ du/(u√(2au - u²)) = -√(2au - u²)/(a u) + C",
        description: "Integral de 1 sobre u por raíz cuadrada de 2au - u²",
        example: "Ejemplo: Forma para integrales con denominador u√(2au - u²)"
    },
    // Integrales adicionales varias
    {
        id: 107,
        category: "Integrales varias",
        equation: "∫ du/(u²√(2au - u²)) = -√(2au - u²)/(a² u) + C",
        description: "Integral de 1 sobre u² por raíz cuadrada de 2au - u²",
        example: "Ejemplo: Forma adicional para completar el formulario"
    },
    {
        id: 108,
        category: "Integrales varias",
        equation: "∫ (a² - u²)³ᐧ² du = -(u/8)(2u² - 5a²)√(a² - u²) + (3a⁴/8) sen⁻¹(u/a) + C",
        description: "Integral de (a² - u²) elevado a 3/2",
        example: "Ejemplo: Integral para volúmenes de revolución"
    },
    {
        id: 109,
        category: "Integrales varias",
        equation: "∫ du/(a² - u²)³ᐧ² = u/(a²√(a² - u²)) + C",
        description: "Integral de 1 sobre (a² - u²) elevado a 3/2",
        example: "Ejemplo: Integral que aparece en electrostática"
    },
    {
        id: 110,
        category: "Integrales varias",
        equation: "∫ du/(u² - a²)³ᐧ² = -u/(a²√(u² - a²)) + C",
        description: "Integral de 1 sobre (u² - a²) elevado a 3/2",
        example: "Ejemplo: Integral para campos electromagnéticos"
    },
    {
        id: 111,
        category: "Integrales varias",
        equation: "∫ u√(a + bu) du = (2/(15b²))(3bu - 2a)(a + bu)³ᐧ² + C",
        description: "Integral de u por raíz cuadrada de a + bu",
        example: "Ejemplo: ∫ x√(1 + 2x) dx = (2/15)(3x - 1)(1 + 2x)³ᐧ² + C"
    },
    {
        id: 112,
        category: "Integrales varias",
        equation: "∫ u/√(a + bu) du = (2/(3b²))(bu - 2a)√(a + bu) + C",
        description: "Integral de u sobre raíz cuadrada de a + bu",
        example: "Ejemplo: ∫ x/√(1 + 2x) dx = (2/3)(x - 1)√(1 + 2x) + C"
    },
    {
        id: 113,
        category: "Integrales varias",
        equation: "∫ u²/√(a + bu) du = (2/(15b³))(8a² + 3b²u² - 4abu)√(a + bu) + C",
        description: "Integral de u² sobre raíz cuadrada de a + bu",
        example: "Ejemplo: Integral para cálculos de centro de masa"
    },
    {
        id: 114,
        category: "Integrales varias",
        equation: "∫ du/(u√(a + bu)) = (1/√a) ln |(√(a + bu) - √a)/(√(a + bu) + √a)| + C, a > 0",
        description: "Integral de 1 sobre u por raíz cuadrada de a + bu (caso a > 0)",
        example: "Ejemplo: Forma logarítmica para a > 0"
    },
    {
        id: 115,
        category: "Integrales varias",
        equation: "∫ du/(u√(a + bu)) = (2/√(-a)) tan⁻¹ √((a + bu)/(-a)) + C, a < 0",
        description: "Integral de 1 sobre u por raíz cuadrada de a + bu (caso a < 0)",
        example: "Ejemplo: Forma con arcotangente para a < 0"
    },
    {
        id: 116,
        category: "Integrales varias",
        equation: "∫ √(a + bu)/u du = 2√(a + bu) + a ∫ du/(u√(a + bu))",
        description: "Integral de raíz cuadrada de a + bu sobre u",
        example: "Ejemplo: Fórmula de reducción para √(a + bu)/u"
    },
    {
        id: 117,
        category: "Integrales varias",
        equation: "∫ √(a + bu)/u² du = -√(a + bu)/u + (b/2) ∫ du/(u√(a + bu))",
        description: "Integral de raíz cuadrada de a + bu sobre u²",
        example: "Ejemplo: Fórmula de reducción para √(a + bu)/u²"
    },
    {
        id: 118,
        category: "Integrales varias",
        equation: "∫ uⁿ√(a + bu) du = (2/(b(2n + 3)))[uⁿ(a + bu)³ᐧ² - na ∫ uⁿ⁻¹√(a + bu) du]",
        description: "Fórmula de reducción para uⁿ por raíz cuadrada de a + bu",
        example: "Ejemplo: Fórmula general de reducción"
    },
    {
        id: 119,
        category: "Integrales varias",
        equation: "∫ uⁿ/√(a + bu) du = (2uⁿ√(a + bu))/(b(2n + 1)) - (2na/(b(2n + 1))) ∫ uⁿ⁻¹/√(a + bu) du",
        description: "Fórmula de reducción para uⁿ sobre raíz cuadrada de a + bu",
        example: "Ejemplo: Fórmula general de reducción"
    },
    {
        id: 120,
        category: "Integrales varias",
        equation: "∫ du/(uⁿ√(a + bu)) = -√(a + bu)/(a(n - 1)uⁿ⁻¹) - (b(2n - 3)/(2a(n - 1))) ∫ du/(uⁿ⁻¹√(a + bu))",
        description: "Fórmula de reducción para 1 sobre uⁿ por raíz cuadrada de a + bu",
        example: "Ejemplo: Fórmula general de reducción"
    }
];



// Función para renderizar las fórmulas del Formulario 1
function renderFormulas1() {
    const container = document.getElementById('formulas1-container');
    container.innerHTML = '';
    
    formulas1.forEach(formula => {
        const formulaCard = document.createElement('div');
        formulaCard.className = 'col-md-6 col-lg-4';
        formulaCard.innerHTML = `
            <div class="formula-card">
                <div class="formula-header" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showExample(${formula.id}, 1)">
                    <div class="d-flex align-items-center">
                        <div class="formula-number">${formula.id}</div>
                        <span>Fórmula ${formula.id}</span>
                    </div>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="formula-content">
                    <div class="formula-equation">${formula.equation}</div>
                    <div class="formula-description">${formula.description}</div>
                </div>
            </div>
        `;
        container.appendChild(formulaCard);
    });
}

// Función para renderizar las fórmulas del Formulario 2
function renderFormulas2() {
    const container = document.getElementById('formulas2-container');
    container.innerHTML = '';
    
    let currentCategory = '';
    
    formulas2.forEach(formula => {
        // Si cambia la categoría, agregar un encabezado
        if (formula.category !== currentCategory) {
            currentCategory = formula.category;
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'row';
            categoryHeader.innerHTML = `
                <div class="col-12">
                    <div class="formula-category mt-4">
                        <i class="fas fa-folder formula-icon"></i>${currentCategory}
                    </div>
                </div>
            `;
            container.appendChild(categoryHeader);
        }
        
        const formulaCard = document.createElement('div');
        formulaCard.className = 'col-md-6 col-lg-4';
        formulaCard.innerHTML = `
            <div class="formula-card">
                <div class="formula-header" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showExample(${formula.id}, 2)">
                    <div class="d-flex align-items-center">
                        <div class="formula-number">${formula.id}</div>
                        <span>Fórmula ${formula.id}</span>
                    </div>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="formula-content">
                    <div class="formula-equation">${formula.equation}</div>
                    <div class="formula-description">${formula.description}</div>
                </div>
            </div>
        `;
        
        // Crear contenedor de fila si es necesario
        let currentRow = container.lastElementChild;
        if (!currentRow || !currentRow.classList.contains('row') || currentRow.children.length >= 3) {
            currentRow = document.createElement('div');
            currentRow.className = 'row';
            container.appendChild(currentRow);
        }
        
        currentRow.appendChild(formulaCard);
    });
}

// Función para mostrar ejemplos en el modal
function showExample(id, formulario) {
    const modalTitle = document.getElementById('exampleModalLabel');
    const modalBody = document.getElementById('modalBody');
    
    let formula;
    if (formulario === 1) {
        formula = formulas1.find(f => f.id === id);
        modalTitle.textContent = `Ejemplo - Fórmula ${id} del Formulario 1`;
    } else {
        formula = formulas2.find(f => f.id === id);
        modalTitle.textContent = `Ejemplo - Fórmula ${id} del Formulario 2`;
    }
    
    if (formula) {
        modalBody.innerHTML = `
            <div class="formula-equation mb-3">${formula.equation}</div>
            <p class="formula-description">${formula.description}</p>
            <div class="example-section">
                <h6><i class="fas fa-lightbulb text-warning"></i> Ejemplo:</h6>
                <p>${formula.example}</p>
            </div>
        `;
    }
}

// Función para buscar fórmulas
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Buscar en Formulario 1
        formulas1.forEach(formula => {
            const card = document.querySelector(`.formula-card .formula-header:has(.formula-number:contains("${formula.id}"))`)?.closest('.formula-card');
            if (card) {
                const text = `${formula.equation} ${formula.description}`.toLowerCase();
                card.style.display = text.includes(searchTerm) ? 'block' : 'none';
            }
        });
        
        // Buscar en Formulario 2
        formulas2.forEach(formula => {
            const card = document.querySelector(`.formula-card .formula-header:has(.formula-number:contains("${formula.id}"))`)?.closest('.formula-card');
            if (card) {
                const text = `${formula.equation} ${formula.description} ${formula.category}`.toLowerCase();
                card.style.display = text.includes(searchTerm) ? 'block' : 'none';
            }
        });
    });
    
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        document.querySelectorAll('.formula-card').forEach(card => {
            card.style.display = 'block';
        });
    });
}

// Inicializar la página cuando se carga
document.addEventListener('DOMContentLoaded', function() {
    renderFormulas1();
    renderFormulas2();
    setupSearch();
    
    // Configurar MathJax para renderizar fórmulas matemáticas
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
});
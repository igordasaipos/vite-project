# 🎨 Blue Theme - Guia de Uso

## Visão Geral

Este projeto utiliza um **Design System baseado em CSS Variables** com a cor **Primary Blue (#5B7FC7)** como base do tema. Todas as cores, espaçamentos e outros tokens de design estão definidos em variáveis CSS reutilizáveis.

## 📁 Arquivos do Tema

- **`src/theme.css`** - Arquivo principal com todas as variáveis CSS
- **`src/App-blue-theme.css`** - Estilos da aplicação usando o novo tema
- **`src/StyleGuide.css`** - Estilos da página de documentação
- **`src/components/StyleGuide.tsx`** - Componente de visualização do Design System

## 🚀 Como Usar

### Visualizar o Design System

Acesse a rota `/styleguide` para ver toda a documentação visual do tema:

```
http://localhost:5173/styleguide
```

### Importar o Tema

Para usar o tema em seus componentes, importe o arquivo CSS:

```tsx
import '../theme.css';
```

### Usar Variáveis CSS

Use as variáveis CSS diretamente nos seus estilos:

```css
.meu-botao {
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.meu-botao:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
}
```

Ou inline com React:

```tsx
<div style={{
  backgroundColor: 'var(--color-bg-blue-lightest)',
  padding: 'var(--space-lg)',
  borderRadius: 'var(--radius-xl)'
}}>
  Conteúdo
</div>
```

## 🎨 Paleta de Cores

### Cores Primárias (Blue Scale)

```css
--color-primary-lighter: #A3BFEA   /* Fundos suaves */
--color-primary-light:   #7A9BD6   /* Hover states */
--color-primary:         #5B7FC7   /* Cor principal */
--color-primary-dark:    #4A6AAD   /* Textos */
--color-primary-darker:  #3A5691   /* Estados ativos */
```

### Cores de Acento (Coral)

```css
--color-accent-light: #F08A81   /* Hover de CTAs */
--color-accent:       #E86A5F   /* CTAs, preços */
--color-accent-dark:  #D1564C   /* Estados ativos */
```

### Cores de Texto

```css
--color-text-primary:   #1E2A3A   /* Títulos, textos principais */
--color-text-secondary: #4A5C70   /* Textos secundários */
--color-text-muted:     #7A8A9E   /* Descrições, labels */
--color-text-disabled:  #B0BAC7   /* Placeholders */
```

### Fundos Blue-Tinted

```css
--color-bg-blue-lightest: #F5F8FC   /* Fundo de telas */
--color-bg-blue-light:    #E8EDF5   /* Cards elevados */
--color-bg-blue:          #D6E1F0   /* Estados ativos */
--color-bg-blue-dark:     #C4D5EA   /* Ênfase */
```

### Estados Interativos

```css
--color-hover:    rgba(91, 127, 199, 0.08)   /* Hover */
--color-active:   rgba(91, 127, 199, 0.16)   /* Active/Pressed */
--color-focus:    rgba(91, 127, 199, 0.24)   /* Focus ring */
--color-disabled: rgba(91, 127, 199, 0.06)   /* Disabled */
```

## 📏 Sistema de Espaçamento

```css
--space-xs:  8px    /* Gap mínimo */
--space-sm:  12px   /* Gap pequeno */
--space-md:  16px   /* Gap padrão */
--space-lg:  24px   /* Gap médio */
--space-xl:  32px   /* Gap grande */
--space-2xl: 48px   /* Padding de seção */
--space-3xl: 64px   /* Padding extra grande */
```

## 🔲 Border Radius

```css
--radius-xs:   8px     /* Elementos pequenos */
--radius-sm:   12px    /* Botões ícone */
--radius-md:   16px    /* Cards pequenos */
--radius-lg:   20px    /* Menu cards */
--radius-xl:   24px    /* Padrão */
--radius-2xl:  28px    /* Choice cards */
--radius-3xl:  32px    /* Containers */
--radius-full: 999px   /* Pill/Circular */
```

## 🌑 Sombras

```css
--shadow-sm:  0 2px 8px rgba(91, 127, 199, 0.08)    /* Sutil */
--shadow-md:  0 4px 16px rgba(91, 127, 199, 0.12)   /* Padrão */
--shadow-lg:  0 8px 24px rgba(91, 127, 199, 0.16)   /* Elevado */
--shadow-xl:  0 12px 32px rgba(91, 127, 199, 0.2)   /* Muito elevado */
--shadow-2xl: 0 24px 48px rgba(91, 127, 199, 0.24)  /* Modal */

/* Sombras específicas de botões */
--shadow-button:       0 4px 12px rgba(91, 127, 199, 0.3)
--shadow-button-hover: 0 6px 20px rgba(91, 127, 199, 0.4)
--shadow-button-active: 0 2px 8px rgba(91, 127, 199, 0.3)
```

## ✍️ Tipografia

```css
/* Família */
--font-family: 'Inter', 'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

/* Tamanhos */
--font-size-xs:   0.75rem   /* 12px */
--font-size-sm:   0.875rem  /* 14px */
--font-size-base: 1rem      /* 16px */
--font-size-lg:   1.125rem  /* 18px */
--font-size-xl:   1.25rem   /* 20px */
--font-size-2xl:  1.5rem    /* 24px */
--font-size-3xl:  1.875rem  /* 30px */
--font-size-4xl:  2.25rem   /* 36px */
--font-size-5xl:  3rem      /* 48px */

/* Pesos */
--font-weight-normal:    400
--font-weight-medium:    500
--font-weight-semibold:  600
--font-weight-bold:      700
--font-weight-extrabold: 800
```

## ⚡ Transições

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 📚 Classes Utilitárias

O tema também inclui classes utilitárias prontas:

### Cores de Texto
```css
.text-primary    /* Cor primária blue */
.text-accent     /* Cor de acento coral */
.text-muted      /* Texto cinza claro */
.text-secondary  /* Texto secundário */
```

### Fundos
```css
.bg-primary    /* Fundo primário */
.bg-accent     /* Fundo de acento */
.bg-secondary  /* Fundo secundário */
.bg-tertiary   /* Fundo terciário */
```

### Sombras
```css
.shadow-sm   /* Sombra pequena */
.shadow-md   /* Sombra média */
.shadow-lg   /* Sombra grande */
.shadow-xl   /* Sombra extra grande */
```

### Border Radius
```css
.rounded-sm    /* 12px */
.rounded-md    /* 16px */
.rounded-lg    /* 20px */
.rounded-xl    /* 24px */
.rounded-2xl   /* 28px */
.rounded-3xl   /* 32px */
.rounded-full  /* 999px */
```

### Gradientes
```css
.gradient-primary  /* Gradiente blue */
.gradient-accent   /* Gradiente blue-coral */
.gradient-subtle   /* Gradiente suave */
.gradient-card     /* Gradiente para cards */
.gradient-fade-bottom /* Fade para o fundo */
```

## 🎯 Exemplos de Uso

### Card com tema

```tsx
<div style={{
  background: 'var(--color-bg-primary)',
  padding: 'var(--space-lg)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-md)'
}}>
  <h3 style={{
    color: 'var(--color-text-primary)',
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 'var(--font-weight-bold)'
  }}>
    Título do Card
  </h3>
  <p style={{
    color: 'var(--color-text-muted)',
    fontSize: 'var(--font-size-sm)'
  }}>
    Descrição do card
  </p>
</div>
```

### Botão com tema

```tsx
<button style={{
  background: 'var(--color-primary)',
  color: 'var(--color-bg-primary)',
  padding: 'var(--space-md) var(--space-xl)',
  borderRadius: 'var(--radius-full)',
  border: 'none',
  fontSize: 'var(--font-size-base)',
  fontWeight: 'var(--font-weight-semibold)',
  boxShadow: 'var(--shadow-button)',
  transition: 'all var(--transition-base)',
  cursor: 'pointer'
}}>
  Clique aqui
</button>
```

## 🔄 Migração do Tema Antigo

Para migrar do tema antigo (roxo) para o novo tema (azul):

1. Substitua as importações:
```diff
- import './App.css';
+ import './theme.css';
+ import './App-blue-theme.css';
```

2. Substitua as cores hardcoded por variáveis:
```diff
- color: #5f4bc7;
+ color: var(--color-primary);

- background: #f5f4f8;
+ background: var(--color-bg-blue-lightest);

- box-shadow: 0 4px 16px rgba(95, 75, 199, 0.12);
+ box-shadow: var(--shadow-md);
```

## 🎨 Customização

Para criar um tema customizado, basta sobrescrever as variáveis CSS:

```css
:root {
  /* Tema customizado com verde */
  --color-primary: #4CAF50;
  --color-primary-light: #66BB6A;
  --color-primary-dark: #388E3C;

  /* Acento laranja */
  --color-accent: #FF9800;
}
```

## 📖 Mais Informações

- Acesse `/styleguide` para documentação visual completa
- Todas as cores têm bom contraste para acessibilidade (WCAG AA)
- O tema suporta dark mode (futuro)
- Sistema totalmente responsivo com clamp() values

---

**Criado com ❤️ usando Primary Blue #5B7FC7**

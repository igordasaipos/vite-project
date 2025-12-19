import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/elevation/elevation.js';
import '../theme.css';
import '../StyleGuide.css';

export function StyleGuide() {
  return (
    <div className="styleguide-screen">
      <div className="styleguide-container">

        {/* Header */}
        <header className="styleguide-header">
          <h1>Design System</h1>
          <p>Blue Theme - Baseado em Primary Blue (#5B7FC7)</p>
        </header>

        {/* Color Palette */}
        <section className="styleguide-section">
          <h2>Paleta de Cores</h2>

          <div className="color-category">
            <h3>Cores Primárias - Blue Scale</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: '#A3BFEA' }}></div>
                <div className="color-info">
                  <span className="color-name">Primary Lighter</span>
                  <span className="color-hex">#A3BFEA</span>
                  <span className="color-usage">Fundos suaves, elementos decorativos</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#7A9BD6' }}></div>
                <div className="color-info">
                  <span className="color-name">Primary Light</span>
                  <span className="color-hex">#7A9BD6</span>
                  <span className="color-usage">Hover states, elementos secundários</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#5B7FC7' }}></div>
                <div className="color-info">
                  <span className="color-name">Primary (Base)</span>
                  <span className="color-hex">#5B7FC7</span>
                  <span className="color-usage">Cor principal do tema, botões, links</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#4A6AAD' }}></div>
                <div className="color-info">
                  <span className="color-name">Primary Dark</span>
                  <span className="color-hex">#4A6AAD</span>
                  <span className="color-usage">Textos em fundos claros, contraste</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#3A5691' }}></div>
                <div className="color-info">
                  <span className="color-name">Primary Darker</span>
                  <span className="color-hex">#3A5691</span>
                  <span className="color-usage">Estados ativos, ênfase forte</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Cores de Acento</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: '#F08A81' }}></div>
                <div className="color-info">
                  <span className="color-name">Accent Light</span>
                  <span className="color-hex">#F08A81</span>
                  <span className="color-usage">Hover de CTAs, destaques suaves</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#E86A5F' }}></div>
                <div className="color-info">
                  <span className="color-name">Accent (Coral)</span>
                  <span className="color-hex">#E86A5F</span>
                  <span className="color-usage">CTAs importantes, preços, ações</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#D1564C' }}></div>
                <div className="color-info">
                  <span className="color-name">Accent Dark</span>
                  <span className="color-hex">#D1564C</span>
                  <span className="color-usage">Estados ativos de CTAs</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#4CAF50' }}></div>
                <div className="color-info">
                  <span className="color-name">Success</span>
                  <span className="color-hex">#4CAF50</span>
                  <span className="color-usage">Mensagens de sucesso, confirmações</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#FF9800' }}></div>
                <div className="color-info">
                  <span className="color-name">Warning</span>
                  <span className="color-hex">#FF9800</span>
                  <span className="color-usage">Avisos, alertas importantes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Cores de Texto</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: '#1E2A3A' }}></div>
                <div className="color-info">
                  <span className="color-name">Text Primary</span>
                  <span className="color-hex">#1E2A3A</span>
                  <span className="color-usage">Títulos, textos principais</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#4A5C70' }}></div>
                <div className="color-info">
                  <span className="color-name">Text Secondary</span>
                  <span className="color-hex">#4A5C70</span>
                  <span className="color-usage">Textos secundários importantes</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#7A8A9E' }}></div>
                <div className="color-info">
                  <span className="color-name">Text Muted</span>
                  <span className="color-hex">#7A8A9E</span>
                  <span className="color-usage">Descrições, labels, hints</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#B0BAC7' }}></div>
                <div className="color-info">
                  <span className="color-name">Text Disabled</span>
                  <span className="color-hex">#B0BAC7</span>
                  <span className="color-usage">Textos desabilitados, placeholders</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Cores de Fundo</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: '#FFFFFF', border: '1px solid #e0e0e0' }}></div>
                <div className="color-info">
                  <span className="color-name">BG Primary (White)</span>
                  <span className="color-hex">#FFFFFF</span>
                  <span className="color-usage">Fundo principal, cards</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#F8F9FB' }}></div>
                <div className="color-info">
                  <span className="color-name">BG Secondary</span>
                  <span className="color-hex">#F8F9FB</span>
                  <span className="color-usage">Fundo alternativo, painéis</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#EFF2F7' }}></div>
                <div className="color-info">
                  <span className="color-name">BG Tertiary</span>
                  <span className="color-hex">#EFF2F7</span>
                  <span className="color-usage">Fundos de seção</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#E8EDF5' }}></div>
                <div className="color-info">
                  <span className="color-name">BG Accent</span>
                  <span className="color-hex">#E8EDF5</span>
                  <span className="color-usage">Destaque sutil com blue</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Fundos Blue-Tinted</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: '#F5F8FC' }}></div>
                <div className="color-info">
                  <span className="color-name">Blue Lightest</span>
                  <span className="color-hex">#F5F8FC</span>
                  <span className="color-usage">Fundo de telas principais</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#E8EDF5' }}></div>
                <div className="color-info">
                  <span className="color-name">Blue Light</span>
                  <span className="color-hex">#E8EDF5</span>
                  <span className="color-usage">Cards, containers elevados</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#D6E1F0' }}></div>
                <div className="color-info">
                  <span className="color-name">Blue</span>
                  <span className="color-hex">#D6E1F0</span>
                  <span className="color-usage">Estados ativos, selecionados</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: '#C4D5EA' }}></div>
                <div className="color-info">
                  <span className="color-name">Blue Dark</span>
                  <span className="color-hex">#C4D5EA</span>
                  <span className="color-usage">Ênfase em elementos blue</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Estados Interativos</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.08)' }}></div>
                <div className="color-info">
                  <span className="color-name">Hover State</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.08)</span>
                  <span className="color-usage">Hover em elementos clicáveis</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.16)' }}></div>
                <div className="color-info">
                  <span className="color-name">Active State</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.16)</span>
                  <span className="color-usage">Estado ativo/pressionado</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.24)' }}></div>
                <div className="color-info">
                  <span className="color-name">Focus State</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.24)</span>
                  <span className="color-usage">Focus ring, acessibilidade</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.06)' }}></div>
                <div className="color-info">
                  <span className="color-name">Disabled State</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.06)</span>
                  <span className="color-usage">Elementos desabilitados</span>
                </div>
              </div>
            </div>
          </div>

          <div className="color-category">
            <h3>Bordas</h3>
            <div className="color-grid">
              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.12)', border: '2px solid rgba(91, 127, 199, 0.12)' }}></div>
                <div className="color-info">
                  <span className="color-name">Border Light</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.12)</span>
                  <span className="color-usage">Bordas suaves, divisores</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.2)', border: '2px solid rgba(91, 127, 199, 0.2)' }}></div>
                <div className="color-info">
                  <span className="color-name">Border</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.2)</span>
                  <span className="color-usage">Bordas padrão</span>
                </div>
              </div>

              <div className="color-card">
                <div className="color-swatch" style={{ background: 'rgba(91, 127, 199, 0.4)', border: '2px solid rgba(91, 127, 199, 0.4)' }}></div>
                <div className="color-info">
                  <span className="color-name">Border Strong</span>
                  <span className="color-hex">rgba(91, 127, 199, 0.4)</span>
                  <span className="color-usage">Bordas com ênfase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Variables */}
        <section className="styleguide-section">
          <h2>Variáveis CSS (CSS Custom Properties)</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            Todas as cores estão disponíveis como variáveis CSS para facilitar a manutenção e permitir temas dinâmicos.
          </p>

          <div className="variables-grid">
            <div className="variable-section">
              <h3>Cores Primárias</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--color-primary</code>
                  <div className="variable-preview" style={{ background: 'var(--color-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-primary-light</code>
                  <div className="variable-preview" style={{ background: 'var(--color-primary-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-primary-lighter</code>
                  <div className="variable-preview" style={{ background: 'var(--color-primary-lighter)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-primary-dark</code>
                  <div className="variable-preview" style={{ background: 'var(--color-primary-dark)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-primary-darker</code>
                  <div className="variable-preview" style={{ background: 'var(--color-primary-darker)' }}></div>
                </div>
              </div>
            </div>

            <div className="variable-section">
              <h3>Cores de Acento</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--color-accent</code>
                  <div className="variable-preview" style={{ background: 'var(--color-accent)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-accent-light</code>
                  <div className="variable-preview" style={{ background: 'var(--color-accent-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-accent-dark</code>
                  <div className="variable-preview" style={{ background: 'var(--color-accent-dark)' }}></div>
                </div>
              </div>
            </div>

            <div className="variable-section">
              <h3>Texto</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--color-text-primary</code>
                  <div className="variable-preview" style={{ background: 'var(--color-text-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-text-secondary</code>
                  <div className="variable-preview" style={{ background: 'var(--color-text-secondary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-text-muted</code>
                  <div className="variable-preview" style={{ background: 'var(--color-text-muted)' }}></div>
                </div>
              </div>
            </div>

            <div className="variable-section">
              <h3>Fundos</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--color-bg-primary</code>
                  <div className="variable-preview" style={{ background: 'var(--color-bg-primary)', border: '1px solid #e0e0e0' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-bg-secondary</code>
                  <div className="variable-preview" style={{ background: 'var(--color-bg-secondary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-bg-blue-lightest</code>
                  <div className="variable-preview" style={{ background: 'var(--color-bg-blue-lightest)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--color-bg-blue-light</code>
                  <div className="variable-preview" style={{ background: 'var(--color-bg-blue-light)' }}></div>
                </div>
              </div>
            </div>

            <div className="variable-section">
              <h3>Espaçamento</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--space-xs (8px)</code>
                  <div className="space-preview" style={{ width: 'var(--space-xs)', background: 'var(--color-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--space-sm (12px)</code>
                  <div className="space-preview" style={{ width: 'var(--space-sm)', background: 'var(--color-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--space-md (16px)</code>
                  <div className="space-preview" style={{ width: 'var(--space-md)', background: 'var(--color-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--space-lg (24px)</code>
                  <div className="space-preview" style={{ width: 'var(--space-lg)', background: 'var(--color-primary)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--space-xl (32px)</code>
                  <div className="space-preview" style={{ width: 'var(--space-xl)', background: 'var(--color-primary)' }}></div>
                </div>
              </div>
            </div>

            <div className="variable-section">
              <h3>Border Radius</h3>
              <div className="variable-list">
                <div className="variable-item">
                  <code>--radius-sm (12px)</code>
                  <div className="radius-preview" style={{ borderRadius: 'var(--radius-sm)', background: 'var(--color-bg-blue-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--radius-md (16px)</code>
                  <div className="radius-preview" style={{ borderRadius: 'var(--radius-md)', background: 'var(--color-bg-blue-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--radius-xl (24px)</code>
                  <div className="radius-preview" style={{ borderRadius: 'var(--radius-xl)', background: 'var(--color-bg-blue-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--radius-3xl (32px)</code>
                  <div className="radius-preview" style={{ borderRadius: 'var(--radius-3xl)', background: 'var(--color-bg-blue-light)' }}></div>
                </div>
                <div className="variable-item">
                  <code>--radius-full (999px)</code>
                  <div className="radius-preview" style={{ borderRadius: 'var(--radius-full)', background: 'var(--color-bg-blue-light)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="styleguide-section">
          <h2>Tipografia</h2>

          <div className="typography-sample">
            <div className="typo-card">
              <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, color: '#5B7FC7', margin: 0 }}>
                Título Hero
              </h1>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: clamp(3rem, 10vw, 7rem)</span>
                <span>Weight: 800</span>
                <span>Color: #5B7FC7</span>
              </div>
            </div>

            <div className="typo-card">
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#2f2a3e', margin: 0 }}>
                Título de Página
              </h1>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: clamp(2rem, 4vw, 2.8rem)</span>
                <span>Weight: 700</span>
                <span>Color: #2f2a3e</span>
              </div>
            </div>

            <div className="typo-card">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2f2a3e', margin: 0 }}>
                Título de Seção
              </h2>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: 1.5rem (24px)</span>
                <span>Weight: 700</span>
                <span>Color: #2f2a3e</span>
              </div>
            </div>

            <div className="typo-card">
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2f2a3e', margin: 0 }}>
                Texto Destacado / Strong
              </p>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: 1.1rem (17.6px)</span>
                <span>Weight: 600</span>
                <span>Color: #2f2a3e</span>
              </div>
            </div>

            <div className="typo-card">
              <p style={{ fontSize: '1rem', color: '#2f2a3e', margin: 0 }}>
                Texto Normal / Body
              </p>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: 1rem (16px)</span>
                <span>Weight: 400</span>
                <span>Color: #2f2a3e</span>
              </div>
            </div>

            <div className="typo-card">
              <p style={{ fontSize: '0.9rem', color: '#7a7786', margin: 0 }}>
                Texto Secundário / Small
              </p>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: 0.9rem (14.4px)</span>
                <span>Weight: 400</span>
                <span>Color: #7a7786</span>
              </div>
            </div>

            <div className="typo-card">
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#8f8ba2', margin: 0 }}>
                Eyebrow / Label
              </p>
              <div className="typo-specs">
                <span>Font: Inter/Space Grotesk</span>
                <span>Size: 0.75rem (12px)</span>
                <span>Weight: 400</span>
                <span>Transform: uppercase</span>
                <span>Letter Spacing: 2px</span>
                <span>Color: #8f8ba2</span>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="styleguide-section">
          <h2>Espaçamento</h2>
          <div className="spacing-samples">
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '8px', height: '8px' }}></div>
              <span>8px - Gap mínimo</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '12px', height: '12px' }}></div>
              <span>12px - Gap pequeno</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '16px', height: '16px' }}></div>
              <span>16px - Gap padrão</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '24px', height: '24px' }}></div>
              <span>24px - Gap médio</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '32px', height: '32px' }}></div>
              <span>32px - Gap grande</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{ width: '48px', height: '48px' }}></div>
              <span>48px - Padding de seção</span>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="styleguide-section">
          <h2>Border Radius</h2>
          <div className="radius-samples">
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '8px' }}></div>
              <span>8px - Pequeno</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '12px' }}></div>
              <span>12px - Botão ícone</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '16px' }}></div>
              <span>16px - Card pequeno</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '20px' }}></div>
              <span>20px - Menu card</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '24px' }}></div>
              <span>24px - Padrão</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '28px' }}></div>
              <span>28px - Choice card</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '32px' }}></div>
              <span>32px - Container</span>
            </div>
            <div className="radius-item">
              <div className="radius-box" style={{ borderRadius: '999px' }}></div>
              <span>999px - Pill/Circular</span>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="styleguide-section">
          <h2>Sombras</h2>
          <div className="shadow-samples">
            <div className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}></div>
              <span>Logo Shadow</span>
              <code>0 4px 16px rgba(0, 0, 0, 0.1)</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)' }}></div>
              <span>Container Shadow</span>
              <code>0 4px 20px rgba(0, 0, 0, 0.06)</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: '0 8px 24px rgba(91, 127, 199, 0.3)' }}></div>
              <span>Button Primary</span>
              <code>0 8px 24px rgba(91, 127, 199, 0.3)</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: '0 18px 35px rgba(93, 73, 160, 0.3)' }}></div>
              <span>Active Card</span>
              <code>0 18px 35px rgba(93, 73, 160, 0.3)</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: '0 24px 80px rgba(0, 0, 0, 0.3)' }}></div>
              <span>Modal Shadow</span>
              <code>0 24px 80px rgba(0, 0, 0, 0.3)</code>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="styleguide-section">
          <h2>Botões</h2>
          <div className="button-samples">
            <div className="button-group">
              <md-filled-button className="start-button" style={{ width: 'auto', minWidth: '240px' }}>
                Primary Large Button
              </md-filled-button>
              <div className="button-specs">
                <span>Filled Button</span>
                <span>Color: #5B7FC7</span>
                <span>Border Radius: 24px</span>
                <span>Shadow: 0 8px 24px rgba(91, 127, 199, 0.3)</span>
              </div>
            </div>

            <div className="button-group">
              <md-filled-button className="add-to-cart-btn">
                Purple Button
              </md-filled-button>
              <div className="button-specs">
                <span>Filled Button</span>
                <span>Color: #5f4bc7</span>
                <span>Border Radius: 999px</span>
              </div>
            </div>

            <div className="button-group">
              <md-filled-button className="cart-review-checkout">
                Red CTA Button
              </md-filled-button>
              <div className="button-specs">
                <span>Filled Button</span>
                <span>Color: #d73333</span>
                <span>Border Radius: 999px</span>
              </div>
            </div>

            <div className="button-group">
              <md-filled-tonal-button className="back-btn">
                Tonal Button
              </md-filled-tonal-button>
              <div className="button-specs">
                <span>Filled Tonal Button</span>
                <span>Color: rgba(95, 75, 199, 0.12)</span>
                <span>Border Radius: 999px</span>
              </div>
            </div>

            <div className="button-group">
              <md-outlined-button className="cart-review-add-more">
                Outlined Button
              </md-outlined-button>
              <div className="button-specs">
                <span>Outlined Button</span>
                <span>Outline: rgba(79, 55, 139, 0.4)</span>
                <span>Border Radius: 999px</span>
              </div>
            </div>

            <div className="button-group">
              <md-filled-tonal-icon-button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </md-filled-tonal-icon-button>
              <div className="button-specs">
                <span>Icon Button</span>
                <span>Color: rgba(95, 75, 199, 0.12)</span>
                <span>Border Radius: 12px</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="styleguide-section">
          <h2>Cards</h2>
          <div className="card-samples">
            <div className="sample-card" style={{ background: '#ebe3f3', borderRadius: '28px', padding: '32px', minHeight: '220px' }}>
              <h3 style={{ margin: 0, marginBottom: '8px', color: '#2f2a3e' }}>Choice Card</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Background: #ebe3f3</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Border Radius: 28px</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Padding: 32px 24px</p>
            </div>

            <div className="sample-card" style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 8px rgba(22, 11, 46, 0.06)' }}>
              <h3 style={{ margin: 0, marginBottom: '8px', color: '#2f2a3e' }}>Menu Card</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Background: #fff</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Border Radius: 20px</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Padding: 16px</p>
            </div>

            <div className="sample-card" style={{ background: '#F8F8F8', borderRadius: '24px', padding: '20px' }}>
              <h3 style={{ margin: 0, marginBottom: '8px', color: '#2f2a3e' }}>Extras Card</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Background: #F8F8F8</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Border Radius: 24px</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Padding: 20px</p>
            </div>

            <div className="sample-card" style={{ background: '#f8f8f8', borderRadius: '24px', padding: '16px' }}>
              <h3 style={{ margin: 0, marginBottom: '8px', color: '#2f2a3e' }}>Cart Item</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Background: #fff</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Border Radius: 18px</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#7a7786' }}>Padding: 16px</p>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="styleguide-section">
          <h2>Gradientes</h2>
          <div className="gradient-samples">
            <div className="gradient-item">
              <div className="gradient-box" style={{ background: 'linear-gradient(135deg, rgba(95, 75, 199, 0.15), rgba(255, 214, 153, 0.4))' }}></div>
              <span>Produto Placeholder</span>
              <code>linear-gradient(135deg, rgba(95, 75, 199, 0.15), rgba(255, 214, 153, 0.4))</code>
            </div>
            <div className="gradient-item">
              <div className="gradient-box" style={{ background: 'linear-gradient(135deg, #f5f4f8 0%, #e8e6f0 100%)' }}></div>
              <span>Background Confirmação</span>
              <code>linear-gradient(135deg, #f5f4f8 0%, #e8e6f0 100%)</code>
            </div>
            <div className="gradient-item">
              <div className="gradient-box" style={{ background: 'linear-gradient(180deg, rgba(245, 244, 248, 0), #f5f4f8 40%)' }}></div>
              <span>Footer Fade</span>
              <code>linear-gradient(180deg, rgba(245, 244, 248, 0), #f5f4f8 40%)</code>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

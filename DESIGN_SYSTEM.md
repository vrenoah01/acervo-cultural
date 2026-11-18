# 🎨 Design System — LATINA: Acervo Cultural

Documentação oficial do **Design System** da plataforma **LATINA (Acervo Cultural)**, desenvolvida para pesquisa, valorização e divulgação da produção artística, literária, musical e histórica da América Latina.

Este documento consolida a identidade visual, a fundamentação teórica dos tokens, as ferramentas de apoio, os componentes reutilizáveis e o mapeamento dos tokens para o código.

---

## 1. Visão Geral e Princípios de Design

O Design System da Latina adota uma abordagem **editorial minimalista contemporânea**, inspirada em catálogos de museus, arquivos históricos de arte e publicações culturais de prestígio. 

### Princípios Fundamentais:
1. **Identidade Editorial Latina:** Atmosfera acolhedora que evoca o papel de arquivo histórico, utilizando tonalidades terrosas e orgânicas (terracota, azul petróleo, verde floresta e papel envelhecido) em equilíbrio com preto e branco de alto contraste.
2. **Mobile First & Fluidez:** Construído desde a menor resolução (375px) até telas ultra-wide (1440px+), priorizando dimensionamentos relativos (`rem`, `em`, `%`, `vw`, `vh`) e funções CSS fluidas (`clamp()`).
3. **Legibilidade & Hierarquia:** Combinação clássica e harmoniosa de tipografia serifada de alta presença (*Playfair Display*) para títulos de impacto e sem serifa moderna (*Inter*) para corpos de texto densos e formulários.
4. **Interação Deliberada e Suave:** Transições cromáticas puras e suaves nos botões (`0.3s ease`), sem efeitos visuais poluídos, reflexos ou sombras desnecessárias.
5. **Acessibilidade e Contraste:** Conformidade com as diretrizes WCAG 2.1 nível AA, garantindo distinção nítida entre superfícies, tipografias e elementos interativos.

---

## 2. Ferramentas e Tecnologias Utilizadas

O ecossistema de ferramentas do projeto integra design com IA, frameworks consolidados e padrões abertos da web:

| Ferramenta / Tecnologia | Versão / Tipo | Função no Projeto |
| :--- | :--- | :--- |
| **Google Stitch** | IA de UI/UX | Prototipagem generativa das telas iniciais e extração de tokens visuais. |
| **Bootstrap** | v5.3.3 (Local via NPM) | Framework CSS base para Grid System, Containers, Navbar colapsável e utilitários. |
| **CSS3 Custom Properties** | Nativo (`:root`) | Declaração e propagação global de tokens de cor, tipografia e bordas. |
| **Sass (SCSS)** | Pré-processador | Mapeamento estruturado de variáveis e compatibilidade com o ecossistema Bootstrap. |
| **Google Fonts** | Web Fonts CDN | Distribuição das famílias tipográficas *Playfair Display* e *Inter*. |
| **Google Material Symbols** | Ícones vetoriais | Ícones de navegação, status e controles de formulário. |
| **Node.js & NPM** | v20+ / CLI | Gestão centralizada de pacotes locais (sem dependência de CDNs externas). |
| **Git & GitHub** | Controle de Versão | Versionamento semântico do código-fonte e documentação técnica. |

---

## 3. Paleta de Cores e Semântica

A paleta de cores foi desenvolvida para transmitir calor humano, ancestralidade e contemporaneidade:

### 3.1. Superfícies e Neutros (Base Editorial)
- **Superfície Principal (`--surface` / `#faf9f5`):** Tom de papel cru/creme suave, reduz a fadiga visual e estabelece o clima de galeria.
- **Superfície Secundária (`--paper-darker` / `#efeee9`):** Papel levemente mais escuro, utilizado em rodapés e seções editoriais em destaque.
- **Superfície Pura (`--surface-lowest` / `#ffffff`):** Fundo limpo para cartões de obras, campos de formulário e popovers.
- **Texto Principal (`--on-surface` / `#1a1c1a`):** Preto grafite quente com excelente contraste sobre o papel.
- **Texto Secundário (`--secondary` / `#5f5e5b`):** Cinza neutro para metadados, subtítulos e legendas.

### 3.2. Acentos Culturais (Categorias)
- **Terracota (`--terracotta` / `#C85C3B`):** Acento primário do sistema. Simboliza a cerâmica pré-colombiana e a terra latino-americana; representa **Música, Ritmo** e elementos de ação.
- **Azul Petróleo (`--petrol-blue` / `#28566B`):** Simboliza as águas continentais e a profundidade; representa **Cinema e Audiovisual**.
- **Verde Profundo (`--deep-green` / `#315C4B`):** Evoca as florestas e a ancestralidade; representa **Literatura e Poesia**.
- **Amarelo Queimado (`--burnt-yellow` / `#D9A441`):** Remete ao sol, ouro nativo e artesanato; representa **Lugares, História e Patrimônio**.

---

## 4. Tipografia e Escala

A hierarquia tipográfica estrutura a narrativa das páginas:

```
Headings (Serif)       -> Playfair Display (600, 700)
Body & UI (Sans-Serif) -> Inter (400 Regular, 500 Medium, 600 Semi-Bold)
```

### Escala de Tamanhos com `clamp()`:
- **Hero Title (H1 Display):** `clamp(2.25rem, 5vw + 0.5rem, 4rem)` — Entrelinha: `1.1`
- **Section Title (H2):** `clamp(1.75rem, 4vw, 2.25rem)` — Entrelinha: `1.2`
- **Card Title (H3):** `clamp(1.125rem, 2.5vw, 1.35rem)` — Entrelinha: `1.3`
- **Body Text:** `clamp(0.95rem, 2vw, 1.125rem)` — Entrelinha: `1.6`
- **Labels e Tags:** `0.6875rem` a `0.85rem` — `letter-spacing: 0.08em` — Caixa alta (uppercase)

---

## 5. Componentes Padronizados

### 5.1. Botões (Buttons)
Os botões seguem o padrão estrito de **inversão cromática pura** com transição de 300ms, sem sombras, deslocamentos ou escalas.

- **Botão Primário (`.btn-primary-custom`, `.btn-editorial`, `.btn-submit-obra`, `.btn-publicar`):**
  - *Estado Normal:* `background-color: #000000; color: #ffffff; border: 1px solid #000000;`
  - *Estado `:hover`:* `background-color: #ffffff; color: #000000; border-color: #000000;`
  - *Transição:* `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;`
- **Botão Outline (`.btn-outline-custom`):**
  - *Estado Normal:* `background-color: transparent; color: #000000; border: 1px solid #000000;`
  - *Estado `:hover`:* `background-color: #000000; color: #ffffff; border-color: #000000;`
  - *Transição:* `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;`

### 5.2. Barra de Navegação (Navbar)
- Fundo em `--surface` (`#faf9f5`) com borda inferior `--outline-variant` (`#c4c7c7`).
- Marca da plataforma em *Playfair Display* 700.
- Responsividade via Bootstrap: colapsada em botão hamburguer em telas `< 768px` (`navbar-expand-md`).

### 5.3. Cartões de Obras (Cards)
- Proporção visual fixa `16:9` ou `4:3` para placeholders e imagens de capa (`aspect-ratio: 16/9; object-fit: cover`).
- Borda neutra de 1px (`#e5e5e0`), sem cantos arredondados (`border-radius: 0`).
- Tag de categoria superior com tipografia em caixa alta e cor temática (Terracota, Azul ou Verde).

### 5.4. Formulários Editoriais (Forms)
- Inputs elegantes de linha única com `border-bottom: 1px solid #1a1c1a` e foco com realce terracota (`border-bottom: 2px solid #C85C3B`).
- Seletor de tipo de conta baseado em chips acessíveis (`input[type="radio"]` + `label.type-label`).
- Zona de upload pontilhada (`border: 1px dashed #cfcfc8`) com suporte a drag-and-drop e clique.

### 5.5. Rodapé (Footer)
- Fundo em `--paper-darker` (`#efeee9`), divisória sutil superior e distribuição flexível de links institucionais com `flex-wrap`.

---

## 6. Dos Tokens ao Código

Como cada token do Design System vira código. As variáveis Sass do Bootstrap são definidas antes do `@import` do framework. O que não tem variável vira uma variável CSS própria:

| Token | Valor | No código |
| :--- | :--- | :--- |
| Cor primária | `#000000` | `$primary` (Sass do Bootstrap) / `--primary` (variável CSS própria) |
| Cor secundária | `#5f5e5b` | `$secondary` (Sass do Bootstrap) / `--secondary` (variável CSS própria) |
| Cor de destaque (Terracota) | `#C85C3B` | `--terracotta` (variável CSS própria, usada em Música e ações) |
| Cor de destaque (Azul Petróleo) | `#28566B` | `--petrol-blue` (variável CSS própria, usada em Cinema) |
| Cor de destaque (Verde Profundo) | `#315C4B` | `--deep-green` (variável CSS própria, usada em Literatura) |
| Cor de destaque (Amarelo Queimado) | `#D9A441` | `--burnt-yellow` (variável CSS própria, usada em Origens/História) |
| Cor de fundo / superfície | `#faf9f5` | `$body-bg` (Sass do Bootstrap) / `--surface` (variável CSS própria, usada no `body`) |
| Cor de fundo secundária | `#efeee9` | `--paper-darker` (variável CSS própria, usada no rodapé e seções) |
| Cor de superfície pura | `#ffffff` | `--surface-lowest` (variável CSS própria, usada em cards e inputs) |
| Cor de texto principal | `#1a1c1a` | `$body-color` (Sass do Bootstrap) / `--on-surface` (variável CSS própria) |
| Cor de texto atenuado | `#747878` | `--outline` / `--text-dim` (variável CSS própria) |
| Cor de borda sutil | `#c4c7c7` | `$border-color` (Sass do Bootstrap) / `--outline-variant` (variável CSS própria) |
| Cor de borda de cartões | `#e5e5e0` | `--card-border` (variável CSS própria, usada nos cards de obras) |
| Fonte dos títulos | `Playfair Display`, 600/700 | `--font-headline` (variável CSS própria, usada em `h1`, `h2`, `h3`) |
| Fonte do texto | `Inter`, 400/500/600 | `$font-family-sans-serif` (Sass do Bootstrap) / `--font-body` (variável CSS própria) |

---

## 7. Implementação do Código CSS Global (`:root`)

Trecho do código centralizado utilizado nas folhas de estilo do projeto:

```css
:root {
  /* Cores de Superfície e Fundo */
  --surface: #faf9f5;
  --surface-lowest: #ffffff;
  --paper-darker: #efeee9;

  /* Cores de Texto e Contraste */
  --on-surface: #1a1c1a;
  --primary: #000000;
  --on-primary: #ffffff;
  --secondary: #5f5e5b;

  /* Cores de Identidade Cultural (Categorias) */
  --terracotta: #C85C3B;
  --petrol-blue: #28566B;
  --deep-green: #315C4B;
  --burnt-yellow: #D9A441;

  /* Bordas e Contornos */
  --outline: #747878;
  --outline-variant: #c4c7c7;
  --card-border: #e5e5e0;

  /* Tipografia */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-headline: 'Playfair Display', Georgia, serif;
}
```

---

## 8. Guia de Responsividade (Breakpoints)

O sistema segue a grade responsiva do **Bootstrap 5.3**, estruturada sob a ótica *Mobile First*:

| Breakpoint | Prefixo | Largura Mínima | Comportamento no Sistema Latina |
| :--- | :--- | :--- | :--- |
| **Extra Small (XS)** | Nenhum | `< 576px` | Smartphones compactos (375px e 430px): 1 coluna (`col-12`), botões ocupando 100% da largura útil, menu colapsado em gaveta hamburguer. |
| **Small (SM)** | `sm` | `≥ 576px` | Telas horizontais de celular: botões lado a lado (`flex-sm-row`), espaçamentos laterais moderados (`px-sm-4`). |
| **Medium (MD)** | `md` | `≥ 768px` | Tablets: navbars expandem horizontalmente, grids tornam-se de 2 colunas (`col-md-6`), hero divide-se em 7/5 colunas. |
| **Large (LG)** | `lg` | `≥ 992px` | Laptops: grids de obras exibem 3 colunas (`col-lg-4` / `row-cols-md-3`), padding generoso de galeria (`px-lg-5`). |
| **Extra Large (XL)**| `xl` | `≥ 1200px` | Telas padrão de desktop: containers contidos (`container-xl` / `max-w-custom: 1280px`). |
| **Extra Extra Large**| `xxl` | `≥ 1400px` | Monitores widescreen: centralização automática do canvas com respiro visual editorial. |

---

## 9. Páginas Integradas ao Design System

As 5 telas desenvolvidas que implementam este Design System de ponta a ponta:

1. **[`01_arquivo_cultural`](../pages/01_arquivo_cultural/index.html):** Hero principal com tipografia fluida, catálogo categorizado e destaques editoriais.
2. **[`02_cadastro_usuario`](../pages/02_cadastro_usuario/index.html):** Formulário de registro com seletor de perfil e inputs minimalistas.
3. **[`03_area_membros_sem_obras`](../pages/03_area_membros_sem_obras/index.html):** Painel do membro em estado vazio (*empty state*) com botão de publicação em inversão cromática.
4. **[`04_cadastro_obra`](../pages/04_cadastro_obra/04_cadastro_obra.html):** Formulário completo de submissão de obras com área de upload pontilhada.
5. **[`05_obras_cadastradas`](../pages/05_obras_cadastradas/index.html):** Listagem de registros com cards 16:9 e tags categorizadas.

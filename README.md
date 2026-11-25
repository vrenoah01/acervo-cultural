# LATINA — Acervo Cultural (`acervo-cultural`)

- **Autor:** Vinícius Renoah Nascimento
- **Disciplina:** Desenvolvimento de Páginas Web com CSS e Framework
- **Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR)
- **Repositório:** [https://github.com/vrenoah01/acervo-cultural.git](https://github.com/vrenoah01/acervo-cultural.git)

---

## 📌 Sobre o Projeto

**LATINA (Acervo Cultural)** é um espaço online voltado à pesquisa, apreciação, curadoria e divulgação cultural da América Latina (música, cinema, literatura, artistas, lugares e história). O projeto adota uma estética editorial minimalista inspirada em catálogos de museus e arquivos históricos, permitindo também que artistas independentes cadastrem e divulguem suas obras gratuitamente.

Consulte a documentação complementar no diretório [`docs/`](./docs/):
- **Requisitos do Produto (PRD):** [`docs/prd.md`](./docs/prd.md)
- **Especificação Técnica e Arquitetura:** [`docs/architecture.md`](./docs/architecture.md)
- **Design System Oficial:** [`docs/design-system.md`](./docs/design-system.md)

---

## 🛠️ Tecnologias e Dependências

### 🔧 Bootstrap (`v5.3.3` via NPM)
Framework CSS instalado localmente (`node_modules/bootstrap/`) para construção de layouts responsivos *Mobile First* (Grid System e utilitários Flexbox), tipografia, formulários e componentes interativos (como Navbar colapsável com `bootstrap.bundle.min.js`).

### 🎨 Google Stitch & CSS3 Custom Properties
Prototipagem das interfaces para desktop e dispositivos móveis via **Google Stitch (IA)** e implementação fiel do Design System utilizando variáveis nativas do CSS3 (`:root`), tipografia fluida com `clamp()` e fontes do Google Fonts (*Playfair Display* e *Inter*) + *Material Symbols Outlined*.

### 📚 Project Gutenberg Free Books API (`v2.0.0` — Planejada)
API pública gratuita com catálogo de mais de 76 mil obras literárias em domínio público, prevista na arquitetura do projeto ([`docs/architecture.md`](./docs/architecture.md)) para integração assíncrona futura.

### 📦 Pacotes NPM Configurados ([`package.json`](./package.json))
- **Produção (`dependencies`):** `bootstrap` (`^5.3.3`), `jquery` (`^4.0.0`), `uuid` (`^14.0.2`)
- **Desenvolvimento (`devDependencies`):** `gh-pages` (`^6.3.0`)

---

## 📂 Estrutura Modular do Projeto

O projeto segue a organização modular padronizada da disciplina, separando a página inicial em [`app/`](./app/), as demais páginas em subpastas independentes dentro de [`app/pages/`](./app/pages/) (com seus respectivos arquivos HTML, CSS e JS) e os recursos visuais em [`assets/`](./assets/):

```text
acervo-cultural/
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── app/
│   ├── index.html                                    # Página inicial (01 - Arquivo Cultural)
│   ├── style.css                                     # Folha de estilo da página inicial
│   └── pages/
│       ├── 02_cadastro_usuario/
│       │   ├── index.html                            # Página de registro de usuários
│       │   ├── style.css                             # Estilos do formulário de cadastro
│       │   └── script.js                             # Validação HTML5 nativa e Expressões Regulares (RegEx)
│       ├── 03_area_membros_sem_obras/
│       │   ├── index.html                            # Painel do membro (estado inicial vazio)
│       │   └── style.css                             # Estilos da área de membros (empty state)
│       ├── 04_cadastro_obra/
│       │   ├── index.html                            # Formulário de publicação de obras culturais
│       │   └── style.css                             # Estilos do formulário de cadastro de obras
│       └── 05_obras_cadastradas/
│           ├── index.html                            # Área de membros com listagem de obras
│           └── style.css                             # Estilos do catálogo de obras cadastradas
├── assets/
│   ├── 01_arquivo_cultural_screenshot.png            # Protótipo/captura da tela inicial
│   ├── 02_cadastro_usuario_screenshot.png            # Protótipo/captura da tela de cadastro de usuário
│   ├── 03_area_membros_sem_obras_screenshot.png      # Protótipo/captura da área de membros vazia
│   ├── 04_cadastro_obra_screenshot.png               # Protótipo/captura da tela de cadastro de obra
│   └── 05_obras_cadastradas_screenshot.png           # Protótipo/captura da tela de obras cadastradas
└── docs/
    ├── architecture.md                               # Diagrama ER, dicionário de dados e tecnologias
    ├── design-system.md                              # Tokens, cores, tipografia, componentes e grid
    └── prd.md                                        # Visão geral, atores e histórias de usuário
```

---

## 📖 Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

* [x] **ID 01 - Prototipa interfaces** adaptáveis para no mínimo os tamanhos **de tela mobile e desktop**, usando ferramentas de design tradicionais (Figma, Quant UX ou Sketch) ou IA (Stitch).
  * **Comprovação:** As 5 telas da plataforma foram prototipadas utilizando o **Google Stitch (IA)** contemplando adaptação mobile e desktop.
  * **Arquivos e caminhos relativos:** Capturas dos protótipos armazenadas em [`assets/01_arquivo_cultural_screenshot.png`](./assets/01_arquivo_cultural_screenshot.png), [`assets/02_cadastro_usuario_screenshot.png`](./assets/02_cadastro_usuario_screenshot.png), [`assets/03_area_membros_sem_obras_screenshot.png`](./assets/03_area_membros_sem_obras_screenshot.png), [`assets/04_cadastro_obra_screenshot.png`](./assets/04_cadastro_obra_screenshot.png) e [`assets/05_obras_cadastradas_screenshot.png`](./assets/05_obras_cadastradas_screenshot.png), além do mapeamento de breakpoints documentado em [`docs/design-system.md`](./docs/design-system.md) (Seções 2 e 8).
* [x] **ID 02 - Implementa layout responsivo** com **Framework CSS** (Bootstrap, Materialize) usando **Flexbox ou Grid** do próprio framework.
  * **Comprovação:** Uso do **Grid System** (`container-lg`, `container-xl`, `row`, `col-md-7`, `col-md-5`, `col-md-6 col-lg-4`, `col-12 col-md-10 col-lg-8`, `row-cols-1 row-cols-md-3 g-4`) e de **utilitários Flexbox responsivos** do Bootstrap 5.3.3 (`d-flex flex-column min-vh-100`, `flex-grow-1`, `d-flex flex-column flex-sm-row gap-3`, `d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center`).
  * **Arquivos e caminhos relativos:**
    * [`app/index.html`](./app/index.html) (Hero em 2 colunas `.col-md-7` / `.col-md-5`, categorias em `.col-md-6.col-lg-4`, destaques em `.col-md-8` / `.col-md-4`).
    * [`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html) (`d-flex flex-column`, `flex-sm-row`, `flex-md-row`).
    * [`app/pages/03_area_membros_sem_obras/index.html`](./app/pages/03_area_membros_sem_obras/index.html) (`d-flex flex-column flex-md-row`).
    * [`app/pages/04_cadastro_obra/index.html`](./app/pages/04_cadastro_obra/index.html) (`row justify-content-center`, `col-12 col-md-10 col-lg-8`).
    * [`app/pages/05_obras_cadastradas/index.html`](./app/pages/05_obras_cadastradas/index.html) (`row row-cols-1 row-cols-md-3 g-4`).
* [x] **ID 03 - Implementa layout responsivo** com **CSS puro**, usando Flexbox ou Grid Layout.
  * **Comprovação:** Declarações de Flexbox e media query responsiva em CSS puro: `body { display: flex; flex-direction: column; min-height: 100vh; }` e `@media (min-width: 768px) { .hero-image-container { margin-left: auto; margin-right: 0; } }` em [`app/style.css`](./app/style.css), além de `.obra-placeholder { display: flex; align-items: center; justify-content: center; }` em [`app/pages/05_obras_cadastradas/style.css`](./app/pages/05_obras_cadastradas/style.css).
* [x] **ID 04 - Utiliza componentes prontos** de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
  * **Comprovação:**
    * **Componentes CSS do Bootstrap:** `navbar`, `navbar-expand-md`, `navbar-brand`, `navbar-nav`, `nav-item`, `nav-link`, `btn`, `btn-link`, `card`, `card-body`, `form-label`, `form-control`, `form-select`.
    * **Componente JavaScript do Bootstrap:** Componente **Collapse** (`collapse navbar-collapse` acionado por `.navbar-toggler` com `data-bs-toggle="collapse"` e `data-bs-target`) utilizando `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`.
  * **Arquivos e caminhos relativos:**
    * [`app/index.html`](./app/index.html) (`navbar-expand-md`, `data-bs-toggle="collapse"`, `data-bs-target="#navbarContent"`, `btn`).
    * [`app/pages/03_area_membros_sem_obras/index.html`](./app/pages/03_area_membros_sem_obras/index.html) (`data-bs-toggle="collapse"`, `data-bs-target="#navbarMembros"`, `btn`).
    * [`app/pages/04_cadastro_obra/index.html`](./app/pages/04_cadastro_obra/index.html) (`data-bs-toggle="collapse"`, `data-bs-target="#navObras"`, `form-control`, `form-select`, `form-label`, `btn`).
    * [`app/pages/05_obras_cadastradas/index.html`](./app/pages/05_obras_cadastradas/index.html) (`data-bs-toggle="collapse"`, `data-bs-target="#navObrasCad"`, `card`, `card-body`).
* [x] **ID 05 - Cria layout fluido** usando **unidades relativas** (vw, vh, %, em, rem) no lugar de unidades fixas (px).
  * **Comprovação:** Dimensionamentos tipográficos, espaçamentos (`padding`, `margin`, `gap`) e containers construídos com `rem`, `em`, `%`, `vw` e `vh` (`min-height: 100vh`, `width: 100%`, `max-width: 40rem`, `max-width: 36rem`, `padding: 0.85rem 1rem`, `min-height: 7.5rem`, `letter-spacing: -0.02em`).
  * **Arquivos e caminhos relativos:** [`app/style.css`](./app/style.css), [`app/pages/02_cadastro_usuario/style.css`](./app/pages/02_cadastro_usuario/style.css), [`app/pages/03_area_membros_sem_obras/style.css`](./app/pages/03_area_membros_sem_obras/style.css), [`app/pages/04_cadastro_obra/style.css`](./app/pages/04_cadastro_obra/style.css) e [`app/pages/05_obras_cadastradas/style.css`](./app/pages/05_obras_cadastradas/style.css).
* [x] **ID 06 - Aplica um Design System consistente** (cores, tipografia, padrões de componentes) em toda a aplicação. *(Consulte o [Design System](./docs/design-system.md))*.
  * **Comprovação:** Definição de tokens CSS em `:root` (paleta editorial `--surface: #faf9f5`, `--on-surface: #1a1c1a`, `--terracotta: #C85C3B`, `--petrol-blue: #28566B`, `--deep-green: #315C4B`, `--paper-darker: #EFEEE9`, famílias `--font-headline: 'Playfair Display'` e `--font-body: 'Inter'`), botões padronizados com transição de inversão cromática (`0.3s ease`), navbar e rodapé unificados em todas as 5 telas.
  * **Arquivos e caminhos relativos:** Documentação em [`docs/design-system.md`](./docs/design-system.md) e implementação em [`app/style.css`](./app/style.css), [`app/pages/02_cadastro_usuario/style.css`](./app/pages/02_cadastro_usuario/style.css), [`app/pages/03_area_membros_sem_obras/style.css`](./app/pages/03_area_membros_sem_obras/style.css), [`app/pages/04_cadastro_obra/style.css`](./app/pages/04_cadastro_obra/style.css) e [`app/pages/05_obras_cadastradas/style.css`](./app/pages/05_obras_cadastradas/style.css).
* [ ] **ID 07 - Utiliza Sass** (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
  * **Situação atual / Pendência:** O projeto utiliza CSS3 nativo com Custom Properties (`:root`). Não há arquivos `.scss` nem compilação Sass configurada no projeto.
* [x] **ID 08 - Aplica tipografia responsiva** (media queries mobile first) ou **tipografia fluida** (função clamp() + unidades relativas).
  * **Comprovação:** Aplicação de **tipografia fluida** com `clamp()` combinando `rem` e `vw` em títulos, subtítulos, marcas e textos (`font-size: clamp(2.25rem, 5vw + 0.5rem, 4rem)`, `clamp(1.75rem, 4vw, 2.25rem)`, `clamp(1rem, 2vw, 1.125rem)`, `clamp(1.125rem, 2.5vw, 1.25rem)`).
  * **Arquivos e caminhos relativos:** [`app/style.css`](./app/style.css) (`.navbar-brand`, `.hero-title`, `.hero-text`, `.section-title`, `.origins-text`), [`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html), [`app/pages/03_area_membros_sem_obras/style.css`](./app/pages/03_area_membros_sem_obras/style.css) (`.welcome-title`), [`app/pages/04_cadastro_obra/style.css`](./app/pages/04_cadastro_obra/style.css) (`.header-title`, `.header-subtitle`) e [`app/pages/05_obras_cadastradas/style.css`](./app/pages/05_obras_cadastradas/style.css) (`.card-title-custom`).
* [x] **ID 09 – Aplica técnicas de responsividade de imagens** usando **CSS** (object-fit, containers com unidades relativas).
  * **Comprovação:** Containers fluidos com `width: 100%`, `max-width: 100%`, `aspect-ratio: 3/4` e `aspect-ratio: 16/9`, combinados com `object-fit: cover` nas imagens internas.
  * **Arquivos e caminhos relativos:** [`app/style.css`](./app/style.css) (classes `.hero-image-container`, `.hero-image-container img`, `.featured-img-container`, `.featured-img-large`, `.featured-img-small`, `.featured-img-container img`) e [`app/pages/05_obras_cadastradas/style.css`](./app/pages/05_obras_cadastradas/style.css) (`.obra-placeholder`).
* [ ] **ID 10 – Otimiza imagens** usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture, ou parâmetros do Cloudinary).
  * **Situação atual / Pendência:** As imagens atuais utilizam tags `<img>` simples e arquivos `.png`. Falta converter imagens para `.webp` e implementar `<picture>` / `srcset` ou parâmetros adaptativos via Cloudinary.

---

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente

* [x] **ID 11 - Implementa validação HTML nativa** (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
  * **Comprovação:**
    * **Atributos HTML5:** `required`, `type="text"`, `type="email"`, `type="tel"`, `type="date"`, `type="password"`, `minlength="3"`, `minlength="10"`, `minlength="8"`, `min="1900-01-01"`, `max="2026-12-31"` e `pattern="^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$"` em [`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html), além de `required` e `accept="image/png, image/jpeg"` em [`app/pages/04_cadastro_obra/index.html`](./app/pages/04_cadastro_obra/index.html).
    * **Constraint Validation API e mensagens no cliente:** Tratamento em [`app/pages/02_cadastro_usuario/script.js`](./app/pages/02_cadastro_usuario/script.js) verificando `validity.valueMissing`, `validity.typeMismatch`, `validity.tooShort`, `validity.rangeUnderflow`, `validity.rangeOverflow` e `validity.patternMismatch`, aplicando `setCustomValidity()`, `checkValidity()`, classes `.input-error` / `.input-success` e mensagens em `<span class="validation-message" aria-live="polite">`.
* [x] **ID 12 - Aplica expressões regulares (REGEX)** para validações customizadas (e-mail, telefone, datas, etc.).
  * **Comprovação:** Objeto `expressoesRegulares` implementado em [`app/pages/02_cadastro_usuario/script.js`](./app/pages/02_cadastro_usuario/script.js) (linhas 8–12) validando:
    * **Telefone (`phone`):** `/^\(?[1-9]{2}\)?\s?(?:9\d{4}|[2-8]\d{3})-?\d{4}$/` (além do atributo `pattern` em [`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html)).
    * **E-mail (`email`):** `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`.
    * **Data de nascimento (`dob`):** `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/`.
* [x] **ID 13 - Utiliza elementos de seleção em formulários** (checkbox, radio, select) para coleta de dados.
  * **Comprovação:**
    * **Radio (`input[type="radio"]`):** Seletor de tipo de conta (`id="type-common"`, `name="account_type"`, `value="comum"`) em [`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html).
    * **Select (`<select>` / `<option>`):** Campo de seleção de categoria cultural (`id="obra-category"`, `class="form-select select-custom"`) com 7 opções em [`app/pages/04_cadastro_obra/index.html`](./app/pages/04_cadastro_obra/index.html).
* [x] **ID 14 - Implementa leitura e escrita no Web Storage** (localStorage/sessionStorage) para persistir dados localmente.
  * **Situação atual / Pendência:** Ainda não há leitura ou escrita em `localStorage` ou `sessionStorage` implementada nos scripts do projeto.

---

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web

* [x] **ID 15 - Configura ambiente com Node.js e NPM** para gerenciamento de pacotes e dependências.
  * **Comprovação:** Projeto configurado com [`package.json`](./package.json) e [`package-lock.json`](./package-lock.json), gerenciando dependências de produção (`bootstrap`, `jquery`, `uuid`) e de desenvolvimento (`gh-pages`), com importação local do Bootstrap via `node_modules/`.
* [x] **ID 16 - Utiliza boas práticas de versionamento** no [Git](https://moodle.utfpr.edu.br/mod/url/view.php?id=1514436 "Git")/[GitHub](https://moodle.utfpr.edu.br/mod/url/view.php?id=2050195 "GitHub") (branch main ou branches específicos, uso de .gitignore).
  * **Comprovação:** Repositório versionado na branch `main`, integrado ao GitHub, com histórico de commits semânticos e arquivo [`.gitignore`](./.gitignore) configurado para ignorar `node_modules/`, `.env`, `.env.local`, logs e diretórios de build.
* [x] **ID 17 - Mantém um README.md padronizado**, conforme template da disciplina, com checklist preenchido.
  * **Comprovação:** Documentação estruturada neste arquivo [`README.md`](./README.md), contendo descrição do projeto, tecnologias, árvore de diretórios, instruções de execução e checklist detalhado com evidências reais por arquivo.
* [x] **ID 18 - Organiza arquivos do projeto de forma modular**, seguindo padrão de exemplo fornecido.
  * **Comprovação:** Estrutura modular organizada no diretório [`app/`](./app/) (com [`app/index.html`](./app/index.html) e [`app/style.css`](./app/style.css) para a página inicial), subpastas por página dentro de [`app/pages/`](./app/pages/) contendo seus respectivos arquivos `index.html`, `style.css` e `script.js`, e diretório [`assets/`](./assets/) para imagens.
* [ ] **ID 19 - Configura linters e formatadores** (ESLint, Prettier) para manter qualidade e padronização do código.
  * **Situação atual / Pendência:** ESLint e Prettier ainda não foram instalados ou configurados no projeto.

---

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web

* [ ] **ID 20 - Utiliza jQuery** para manipulação do DOM e interatividade (eventos, animações, manipulação de elementos).
  * **Situação atual / Pendência:** O pacote `jquery` está instalado no [`package.json`](./package.json), mas ainda não foi importado ou utilizado em scripts nas páginas.
* [ ] **ID 21 - Integra e configura um plugin jQuery** relevante (ex.: jQuery Mask Plugin) ou outra biblioteca de funções.
  * **Situação atual / Pendência:** Nenhum plugin jQuery ou biblioteca de funções JavaScript foi integrado às páginas até o momento.

---

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente

* [ ] **ID 22 - Realiza requisições assíncronas para uma API fake** (ex.: JSON Server) para persistir dados de um formulário.
  * **Situação atual / Pendência:** Ainda não há servidor JSON Server configurado nem requisições assíncronas de envio (`POST`/`PUT`) implementadas.
* [ ] **ID 23 - Realiza requisições assíncronas para uma API fake** para exibir dados na página.
  * **Situação atual / Pendência:** As obras exibidas em [`app/pages/05_obras_cadastradas/index.html`](./app/pages/05_obras_cadastradas/index.html) são estáticas no HTML; falta implementar busca assíncrona (`GET`) em API fake.
* [ ] **ID 24 - Realiza requisições assíncronas para APIs públicas reais** (OpenWeather, ViaCEP etc.), exibindo os dados e tratando erros.
  * **Situação atual / Pendência:** A integração com a *Project Gutenberg Free Books API* está especificada na documentação, mas ainda não foi implementada em JavaScript.

---

## ✅ Checklist da Atividade 06

- [x] Configurei minha identidade no Git
- [x] Clonei o repositório do meu projeto
- [x] Inicializei o NPM ([`package.json`](./package.json))
- [x] Criei o [`.gitignore`](./.gitignore) ignorando `node_modules` e `.env`
- [x] Instalei `jquery` e `uuid` como dependências de produção
- [x] Instalei `gh-pages` como dependência de desenvolvimento
- [x] Fiz commit e push para a branch `main`

---

## 🏛️ Telas do Projeto LATINA: Arquivo Cultural Minimalista

As telas prototipadas via **Google Stitch (IA)** e implementadas com **Bootstrap 5.3.3 (local via NPM)** estão organizadas modularmente em [`app/`](./app/):

1. **[`app/index.html`](./app/index.html)** *(Página Inicial — Arquivo Cultural)*: Layout principal com Hero, catálogo de categorias culturais, grid editorial de obras em destaque e seção de origens latino-americanas.
2. **[`app/pages/02_cadastro_usuario/index.html`](./app/pages/02_cadastro_usuario/index.html)** *(Cadastro de Usuário)*: Formulário de registro de novos membros com validação HTML5 nativa e Expressões Regulares (`script.js`).
3. **[`app/pages/03_area_membros_sem_obras/index.html`](./app/pages/03_area_membros_sem_obras/index.html)** *(Área de Membros — Estado Vazio)*: Painel de boas-vindas da área de membros em estado inicial (*empty state*) com chamada para publicação de obras.
4. **[`app/pages/04_cadastro_obra/index.html`](./app/pages/04_cadastro_obra/index.html)** *(Cadastro de Obra)*: Formulário de submissão de obras culturais com título, seletor de categoria, descrição e área de upload de capa.
5. **[`app/pages/05_obras_cadastradas/index.html`](./app/pages/05_obras_cadastradas/index.html)** *(Obras Cadastradas)*: Área de membros com listagem em grid responsivo de 3 colunas dos registros culturais publicados.

---

## 🚀 Como Executar Localmente

1. Instale as dependências do projeto via NPM:
   ```bash
   npm install
   ```

2. Inicie um servidor HTTP estático na raiz do repositório:
   ```bash
   python3 -m http.server 3000
   ```

3. Acesse a página inicial no navegador:
   ```text
   http://localhost:3000/app/index.html
   ```

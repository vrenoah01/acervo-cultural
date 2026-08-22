# Documentação do Projeto: Latina

---

## 1. Visão Geral e Objetivo

A Latina é um acervo cultural online, dedicado a valorização, divulgação e estímulo da cultura latino-americana em seus diversos campos (cultural, geográfico, artístico, etc). É um espaço onde pessoas podem encontrar livros, autores, músicas, monumentos históricos, lugares, obras audiovisuais e diversos outros assuntos sobre a América Latina. 

O diferencial da plataforma é que artistas, escritores e músicos independentes possam divulgar seus trabalhos de maneira gratuita, apenas efetuando um cadastro em nosso site. Ao se cadastrar os usuários também tem a opção de contribuir financeiramente com o nosso projeto tendo alguns benefícios como participar de fóruns, receber nossa newsletter e ter acesso ao nosso clube de leitura do Apoia-se. 

---

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a página inicial e visualiza e pesquisa pelos conteúdos do acervo. 
- **Usuário cadastrado (Apoiador):** Usuário que se cadastra em nosso site contribuindo com conteúdos autorais ou contribuindo financeiramente com o projeto. 
- **O Acervo (Sistema):** Espaço online onde o conteúdo estará disponível para pesquisa, visualização e demais atividades, além da criação de novos conteúdos. 

---

## 3. Histórias de Usuário e Escopo

### 🌎 Épico 1: Visitante e Apresentação 

- **US01 – Apresentação da plataforma:**
  > Como um visitante, quero visualizar na página inicial o propósito do acervo "Latina" e seus diferenciais, para entender rapidamente que se trata de um espaço de valorização da cultura latino-americana. 

- **US02 – Navegação deslogada:**
  > Como um visitante, quero poder visualizar o catálogo geral de artistas e obras em destaque, para conhecer a qualidade do conteúdo antes de decidir me cadastrar.

---

### 📝 Épico 2: Cadastro e Acesso

- **US03 – Cadastro de Usuário Padrão:**
  > Como um visitante, quero preencher um formulário (Nome, E-mail e Senha) para criar uma conta de usuário padrão.
  
  **Critérios de Aceitação:**
  - [ ] O e-mail deve ser válido.
  - [ ] A senha deve conter no mínimo 8 caracteres.
  - [ ] Todos os campos são obrigatórios.

- **US04 – Cadastro de Artista Independente:**
  > Como um artista, escritor ou músico, quero marcar uma opção de "Conta de Artista" durante o cadastro, para habilitar as ferramentas de publicação de obras. 

- **US05 – Login:**
  > Como um usuário cadastrado, quero inserir meu e-mail e senha para acessar minha área restrita e funcionalidades exclusivas.

---

### 📚 Épico 3: Acervo e Descoberta 

- **US06 – Busca de conteúdo:**
  > Como um usuário, quero utilizar uma barra de pesquisa para localizar livros, músicas, obras audiovisuais ou autores específicos.
  
  **Critérios de Aceitação:**
  - [ ] A busca deve funcionar mesmo com o nome parcialmente digitado.

- **US07 – Divisão de categorias:**
  > Como um usuário, quero visualizar uma barra de categorias que separe os conteúdos do site por temas (músicas, filmes, literatura, histórias, etc). 

---

### 🎨 Épico 4: Área do Artista 

- **US08 – Publicação de obras:**
  > Como um Artista Independente, quero preencher um formulário com título, categoria, descrição e imagem de capa para divulgar meu trabalho gratuitamente no acervo.
  
  **Critérios de Aceitação:**
  - [ ] O upload da imagem deve suportar os formatos JPG e PNG.
  - [ ] Os campos de título, categoria e descrição são obrigatórios.

- **US09 – Gerenciamento de portfólio:**
  > Como um Artista Independente, quero poder editar ou excluir as minhas publicações anteriores, para manter meu perfil atualizado para o público.

---

### 🤝 Épico 5: Financiamento e Comunidade (Apoiadores) 

- **US10 – Contribuição financeira:**
  > Como um usuário, quero acessar uma página de "Apoio" com informações claras sobre os planos e redirecionamento seguro para a plataforma de pagamento (ex: Apoia.se), para ajudar a manter o projeto.
  
  **Critérios de Aceitação:**
  - [ ] Deve existir um link com QR code para o pagamento da contribuição.

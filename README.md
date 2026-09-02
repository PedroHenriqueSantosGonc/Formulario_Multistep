# ⚖️ Calculadora de IMC (Índice de Massa Corporal)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Uma aplicação web moderna, intuitiva e responsiva desenvolvida para o cálculo rápido e preciso do **Índice de Massa Corporal (IMC)**. Este projeto foi construído para servir como parte do meu portfólio de desenvolvimento Front-End, demonstrando a aplicação de boas práticas em **React**, componentização limpa e build otimizado com **Vite**.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Conceitos Aplicados & Aprendizados](#-conceitos-aplicados--aprendizados)
- [Roadmap & Melhorias Futuras](#-roadmap--melhorias-futuras)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 💡 Visão Geral

O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Esta ferramenta oferece uma interface simplificada onde o usuário informa peso e altura, recebendo imediatamente a sua classificação e recomendações básicas de saúde.

### 🌟 Destaques do Projeto
- **Feedback em tempo real:** Resposta instantânea assim que os dados são processados.
- **Design Adaptativo:** Funciona perfeitamente em dispositivos móveis, tablets e desktops.
- **Validação de Entrada:** Impede o envio de valores negativos, caracteres inválidos ou campos vazios.

---

## ✨ Funcionalidades

- 📊 **Cálculo Preciso:** Executa a fórmula `IMC = peso / (altura * altura)` de forma rápida.
- 🏷️ **Classificação Automática:** Identifica e exibe a categoria correspondente:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade Grau I
  - Obesidade Grau II
  - Obesidade Grau III (Mórbida)
- 🔄 **Opção de Reset:** Permite limpar os campos rapidamente para uma nova consulta.

---

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para a criação da interface reativa.
- **[Vite](https://vitejs.dev/):** Ferramenta de build extremamente rápida para o ecossistema Web moderno.
- **JavaScript (ES6+):** Lógica da aplicação, manipulação de estados e funções utilitárias.
- **CSS3:** Estilização modular e design responsivo com Media Queries.
- **ESLint:** Mantenedor da padronização e qualidade do código.

---

## 📁 Arquitetura do Projeto

```text
calculadora_imc/
├── calculadora/
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis da interface
│   │   ├── utils/           # Funções utilitárias (ex: fórmula e regras do IMC)
│   │   ├── App.jsx          # Componente principal
│   │   ├── main.jsx         # Ponto de entrada da aplicação React
│   │   └── index.css        # Estilos globais e variáveis de tema
│   ├── public/              # Ativos estáticos
│   ├── index.html           # Documento HTML principal
│   ├── package.json         # Dependências e scripts do projeto
│   └── vite.config.js       # Configurações do Vite
└── README.md
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes **npm** (incluso com o Node) ou **yarn** / **pnpm**

### Passo a Passo

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/calculadora_imc.git
   ```

2. **Acessar o Diretório:**
   ```bash
   cd calculadora_imc/calculadora
   ```

3. **Instalar as Dependências:**
   ```bash
   npm install
   ```

4. **Executar a Aplicação em Modo de Desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar no Navegador:**
   Abra o link gerado pelo Vite no terminal (geralmente `http://localhost:5173`).

---

## 🧠 Conceitos Aplicados & Aprendizados

Durante a implantação desta aplicação, foram exercitados e aprofundados os seguintes conceitos:

- **Gerenciamento de Estado no React:** Utilização eficiente de hooks (`useState`) para controlar entradas do formulário e exibição de resultados.
- **Modularização de Código:** Separação clara entre lógica de negócios (cálculo e tabela de classificação) e componentes de UI.
- **Formatações e Tratamento de Dados:** Validação rigorosa de tipos numéricos e formatação do resultado final em casas decimais.
- **Performance Front-End:** Aproveitamento da estrutura levinha do Vite para tempos de recarregamento (HMR) quase instantâneos.

---

## 🔮 Roadmap & Melhorias Futuras

- [ ] **Histórico Local:** Salvar os últimos cálculos realizados via `localStorage`.
- [ ] **Gráfico Interativo:** Exibir a posição do usuário em uma régua/escala visual do IMC.
- [ ] **Dark Mode:** Suporte a alternância entre temas claro e escuro.
- [ ] **Testes Automatizados:** Implementação de testes de componentes com Vitest e React Testing Library.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✉️ Contato

Desenvolvido com 💻 e ☕ por **Pedro Henrique dos Santos Gonçalves**.

- **LinkedIn:** [Pedro Henrique](https://www.linkedin.com/in/pedro-henrique-dos-santos-gon%C3%A7alves-8332062b2/)

---
*Se este projeto te ajudou ou serve de inspiração, sinta-se à vontade para dar uma ⭐️ no repositório!*

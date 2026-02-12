# To-Do List

Projeto TypeScript configurado com tsx, tsup, ESLint, Prettier e EditorConfig.

## 📦 Ferramentas Configuradas

- **TypeScript**: Tipagem estática
- **tsx**: Execução de arquivos TypeScript
- **tsup**: Build rápido e otimizado
- **ESLint**: Linting de código
- **Prettier**: Formatação de código
- **EditorConfig**: Padronização de editores

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento - executa o projeto com tsx
npm run dev

# Build - compila o projeto com tsup
npm run build

# Start - executa o build compilado
npm start

# Lint - verifica o código com ESLint
npm run lint

# Lint:fix - corrige problemas automaticamente
npm run lint:fix

# Format - formata o código com Prettier
npm run format

# Format:check - verifica a formatação
npm run format:check

# Typecheck - verifica os tipos TypeScript
npm run typecheck
```

## 📁 Estrutura do Projeto

```
.
├── src/              # Código fonte
│   └── index.ts      # Arquivo principal
├── dist/             # Arquivos compilados
├── .editorconfig     # Configuração do editor
├── .prettierrc       # Configuração do Prettier
├── .prettierignore   # Arquivos ignorados pelo Prettier
├── eslint.config.js  # Configuração do ESLint
├── tsconfig.json     # Configuração do TypeScript
├── tsup.config.ts    # Configuração do tsup
└── package.json      # Dependências e scripts
```

## 🛠️ Desenvolvimento

1. Instale as dependências:
```bash
npm install
```

2. Execute em modo de desenvolvimento:
```bash
npm run dev
```

3. Faça o build do projeto:
```bash
npm run build
```

4. Execute o build:
```bash
npm start
```

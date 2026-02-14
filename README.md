# To-Do List API

Uma aplicação backend simples e funcional para gerenciamento de tarefas, desenvolvida com foco em boas práticas de desenvolvimento e arquitetura limpa.

## 📋 Sobre o Projeto

Esta API RESTful foi criada para permitir que usuários autenticados possam criar, visualizar, atualizar e deletar suas tarefas. O projeto serve como base sólida para aprendizado e desenvolvimento de funcionalidades adicionais, mantendo um código organizado e seguindo padrões estabelecidos na comunidade.

## Diagrama do projeto

![Diagrama](docs/img/diagram.png)

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado de JavaScript
- **Express** - Framework web minimalista
- **Prisma** - ORM moderno para Node.js
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação via tokens
- **Bcrypt** - Hash seguro de senhas
- **Swagger/OpenAPI** - Documentação interativa da API
- **Docker** - Containerização do banco de dados
- **ESLint** - Análise estática de código
- **Prettier** - Formatação de código

## 📚 Documentação da API

A API está documentada através do **Swagger**, uma ferramenta que permite visualizar e testar todos os endpoints de forma interativa.

### Acessando o Swagger

Após iniciar a aplicação em modo desenvolvimento, acesse:

```
http://localhost:3000/api-docs
```

No Swagger você pode:
- Ver todos os endpoints disponíveis
- Consultar os parâmetros necessários
- Visualizar os tipos de resposta esperados
- Testar as requisições diretamente da interface web

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18+)
- Docker e Docker Compose (para o banco de dados)
- npm ou yarn

### Instalação

1. **Clone o repositório e instale as dependências:**

```bash
npm install
```

2. **Configure as variáveis de ambiente** (crie um arquivo `.env`):

```env
DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
JWT_SECRET="sua-chave-secreta-aqui"
```

3. **Inicie o banco de dados:**

```bash
npm run db:up
```

4. **Execute as migrações:**

```bash
npm run db:reset
```

## 🧪 Como Testar

### Desenvolvimento

Para iniciar o servidor em modo desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`

### Testes na API

1. **Via Swagger** (recomendado):
   - Acesse `http://localhost:3000/api-docs`
   - Explore os endpoints e teste diretamente na interface

2. **Via ferramentas como Postman ou Insomnia**:
   - Importe os endpoints disponíveis
   - Configure as headers necessárias (incluindo o token JWT)
   - Envie as requisições

3. **Via linha de comando (cURL)**:

```bash
# Exemplo de autenticação
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'
```

### Verificação de Qualidade

```bash
# Linting do código
npm run lint

# Corrigir problemas automáticos
npm run lint:fix

# Formatação de código
npm run format

# Verificação de tipos
npm run typecheck
```
## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Executa a aplicação compilada |
| `npm run lint` | Analisa o código |
| `npm run lint:fix` | Corrige problemas do linting |
| `npm run format` | Formata o código |
| `npm run typecheck` | Verifica tipos TypeScript |
| `npm run db:up` | Inicia o container do banco de dados |
| `npm run db:down` | Para o container do banco de dados |
| `npm run db:reset` | Reseta o banco e executa migrações |

## 🔐 Autenticação

A API utiliza autenticação baseada em JWT (JSON Web Tokens). Para acessar os endpoints protegidos, é necessário:

1. Realizar login com credenciais válidas
2. Obter um token JWT na resposta
3. Incluir o token no header `Authorization: Bearer <token>` nas requisições subsequentes

## 📈 Planos de Melhoria

Este projeto está sob desenvolvimento contínuo. As seguintes funcionalidades estão planejadas:

- [ ] Autenticação com refresh tokens
- [ ] Notificações de prazos
- [ ] Testes automatizados
- [ ] Documentação de endpoints melhorada
- [ ] Sistema de logs estruturado
- [ ] Cache para melhor performance

## 📝 Notas

- O código segue boas práticas de desenvolvimento TypeScript
- A estrutura do projeto permite fácil expansão de funcionalidades
- Todo banco de dados é versionado através de migrações Prisma

## 📧 Suporte

Para dúvidas ou sugestões sobre o projeto, sinta-se livre para abrir uma issue ou entrar em contato.

---

**Versão:** 1.0.0
**Última atualização:** Fevereiro de 2026

# Sistema para coleta de satisfação dos alunos

Este projeto como objetivo criar uma aplicação web para coletar pesquisas de satisfação dos alunos do Curso de Análise e Desenvolvimento de Sistemas. A aplicação utiliza Docker para fornecer um ambiente de desenvolvimento consistente e portátil. Inicio: 22/04/2025

## Estrutura do projeto

O projeto consiste nos seguintes componentes principais:

- **Containers Docker**:
  - **PostgreSQL**: Um banco de dados relacional para armazenar dados estruturados.
  - **MongoDB**: Um banco de dados NoSQL para armazenamento de dados mais flexíveis.
  - **Node.js**: O servidor da aplicação que executa a aplicação de pesquisa de satisfação.

- **Código Fonte**:
  - O código da aplicação está localizado no diretório `src`, que inclui o arquivo principal da aplicação (`app.js`) e o `package.json` para gerenciar as dependências.

## Começando

Para configurar o ambiente de desenvolvimento, siga estes passos:

1. **Clone o Repositório**:
   ```bash
   git clone <ur-do-repositorio>
   cd Feedback_ADS
   ```

2. **Construa e Execute os Containers:** Use o Docker Compose para construir e executar os containers. No diretório raiz do projeto, execute:
   ```bash
   docker-compose up -d
   ```

3. **Acesse a Aplicação:** Assim que os containers estiverem em execução, você pode acessar a aplicação em `http://localhost:3000`. Caso queira adicionar algo: `curl -X POST http://localhost:3000/feedback -H "Content-Type: application/json" -d "{\"aluno\": \"Nome\", \"satisfação\": 0"` e acesse `http://localhost:3000/feedback_aluno`

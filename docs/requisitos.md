# Documentação de Requisitos
## EcoConteiner Casas

### 1. Objetivo

Desenvolver uma plataforma web para apresentar modelos
de moradias construídas com contêineres, permitindo
solicitações e consultas de estimativas de orçamento.

### 2. Atores

- Cliente: consulta modelos e solicita orçamento.
- Administrador: consulta solicitações registradas.

### 3. Requisitos Funcionais

| ID | Descrição |
|---|---|
| RF01 | Permitir consultar os modelos de casas disponíveis. |
| RF02 | Permitir visualizar as características dos modelos. |
| RF03 | Permitir selecionar um modelo. |
| RF04 | Permitir informar nome e e-mail. |
| RF05 | Permitir informar a área desejada. |
| RF06 | Permitir descrever o projeto. |
| RF07 | Permitir validar os dados. |
| RF08 | Permitir calcular estimativas. |
| RF09 | Permitir registrar solicitações. |
| RF10 | Permitir consultar solicitações. |
| RF11 | Permitir visualizar o status. |

### 4. Requisitos Não Funcionais

| ID | Descrição |
|---|---|
| RNF01 | O sistema deverá funcionar em navegadores modernos. |
| RNF02 | O sistema deverá ser responsivo. |
| RNF03 | O sistema deverá validar campos obrigatórios. |
| RNF04 | O sistema deverá informar o resultado das operações. |
| RNF05 | Os registros deverão permanecer no localStorage após atualizar a página. |
| RNF06 | O código deverá ser separado em HTML, CSS e JavaScript. |
| RNF07 | A interface deverá apresentar navegação organizada. |

### 5. Regras de Negócio

| ID | Descrição |
|---|---|
| RN01 | Nome e e-mail são obrigatórios. |
| RN02 | Toda solicitação deve possuir um modelo. |
| RN03 | A área deve estar entre 10 e 500 m². |
| RN04 | A estimativa é calculada proporcionalmente à área. |
| RN05 | Toda solicitação começa com status Pendente. |
| RN06 | O valor calculado é apenas ilustrativo. |
| RN07 | A descrição é opcional. |

### 6. Escopo

Incluído:
- Catálogo.
- Formulário.
- Estimativa.
- Armazenamento local.
- Painel demonstrativo.

Não incluído:
- Pagamentos.
- Contratos.
- Login real.
- Banco de dados em servidor.
- Integração com fornecedores.

### 7. Limitações

O armazenamento é realizado no navegador e não
permite compartilhamento de registros entre usuários
ou dispositivos.
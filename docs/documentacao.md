# ECOCONTEINER CASAS
## Documentação do Sistema

### Identificação

**Integrantes:**
- Arthur Ribeiro Grupo
- Ana Clara Mazeto Lima Iran

**Professor:** Euller

**Disciplina:** Análise e Projeto de Sistemas

**Tecnologias:** HTML5, CSS3 e JavaScript

**Ano:** 2026

**Repositório:** https://github.com/arthurribeirogrupo/EcoConteiner-Casas

---

# 1. INTRODUÇÃO

O EcoConteiner Casas é uma plataforma web que apresenta
uma proposta de moradias sustentáveis utilizando
contêineres reaproveitados.

O sistema foi desenvolvido para permitir que usuários
conheçam modelos de casas, consultem características
e solicitem estimativas de orçamento.

# 2. PROBLEMA

A dificuldade de encontrar informações organizadas
sobre modelos de moradias com contêineres pode dificultar
a comparação de alternativas e o planejamento inicial
de uma construção.

A plataforma busca reunir essas informações em um
ambiente digital simples e acessível.

# 3. OBJETIVO

Desenvolver um sistema web que apresente modelos de casas
sustentáveis e permita o registro e a consulta de
solicitações de orçamento.

# 4. ESCOPO

O sistema contempla:
- Apresentação institucional.
- Catálogo de modelos.
- Formulário de orçamento.
- Validação de dados.
- Estimativa de custos.
- Registro de solicitações.
- Painel demonstrativo.

Não contempla:
- Pagamentos.
- Contratos.
- Autenticação real.
- Banco de dados remoto.
- Contratação de construção.

# 5. REQUISITOS

Os requisitos funcionais, não funcionais e as regras
de negócio estão detalhados em `requisitos.md`.

# 6. CASOS DE USO

Os principais casos de uso são:

- UC01: Consultar modelos.
- UC02: Solicitar orçamento.
- UC03: Consultar solicitações.

As descrições completas estão neste documento e o
diagrama está disponível em `casos-de-uso.puml`.

# 7. DIAGRAMA DE CLASSES

O modelo de classes prevê as entidades Cliente,
Administrador, ModeloCasa e Solicitacao, além das
classes responsáveis pelo catálogo, orçamento,
armazenamento e painel administrativo.

O diagrama completo encontra-se em `classes.puml`.

# 8. TECNOLOGIAS

**HTML5:** estrutura do site.

**CSS3:** identidade visual e responsividade.

**JavaScript:** validação, cálculos e armazenamento local.

**Git:** controle de versões.

**GitHub:** hospedagem do código.

# 9. IMPLEMENTAÇÃO

A aplicação disponibiliza catálogo de três modelos
demonstrativos, formulário de orçamento e painel
de consulta.

Os registros são armazenados utilizando localStorage.

# 10. TESTES PREVISTOS

| Teste | Resultado esperado |
|---|---|
| Abrir página inicial | Página apresentada corretamente |
| Consultar catálogo | Três modelos exibidos |
| Enviar formulário vazio | Envio bloqueado |
| Informar e-mail inválido | Mensagem de validação |
| Informar área inferior a 10 m² | Envio bloqueado |
| Informar área superior a 500 m² | Envio bloqueado |
| Enviar dados válidos | Solicitação registrada |
| Atualizar página | Registro permanece no navegador |
| Consultar painel | Solicitação apresentada |

# 11. LIMITAÇÕES

Os registros são locais e não compartilhados.
O painel não possui autenticação.
Os valores são estimativas ilustrativas.

# 12. CONSIDERAÇÕES FINAIS

O projeto aplica conceitos de análise de requisitos,
modelagem de sistemas, desenvolvimento web e
versionamento de código.

O EcoConteiner Casas demonstra uma proposta de
plataforma digital para apresentação de moradias
sustentáveis e poderá receber novas funcionalidades
em futuras versões.

---

Desenvolvido por Arthur Ribeiro Grupo e
Ana Clara Mazeto Lima Iran.

Professor: Euller.

Disciplina: Análise e Projeto de Sistemas.
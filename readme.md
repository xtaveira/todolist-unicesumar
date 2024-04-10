
Projeto Web: Sistema de Gerenciamento de Tarefas

Este projeto consistirá em um sistema de gerenciamento de tarefas onde os usuários podem criar, visualizar, atualizar e excluir tarefas. Cada tarefa poderá estar associada a uma categoria e ter uma data de conclusão.

Entidades:

- Usuário:
	Atributos: ID, nome de usuário, senha, e-mail.


- Tarefa:
	Atributos: ID, título, descrição, data de criação, data de conclusão, categoria (opcional), status (pendente, em andamento, concluída), e usuário associado.
Categoria:

Atributos: ID, nome, cor (para identificação visual).

Requisitos das Rotas (OPICIONAL - FAÇA POR ÚLTIMO):

Autenticação:

Rota de registro de usuário.
Rota de login de usuário.

Tarefas:

Rota para criação de uma nova tarefa.
Rota para listar todas as tarefas de um usuário.
Rota para obter detalhes de uma tarefa específica.
Rota para atualizar uma tarefa existente.
Rota para excluir uma tarefa.

Categorias:

Rota para criação de uma nova categoria.
Rota para listar todas as categorias de um usuário.
Rota para obter detalhes de uma categoria específica.
Rota para atualizar uma categoria existente.
Rota para excluir uma categoria.


- Funcionalidades Adicionais utilizando Métodos de Array:

Rota para filtrar tarefas por categoria.
Rota para listar tarefas concluídas.
Rota para listar tarefas pendentes.
Rota para listar tarefas que vencem em um determinado período.
Rota para contar o número total de tarefas de um usuário.
Rota para encontrar a tarefa mais recente de um usuário.
Funcionalidades com Métodos de Manipulação de Array:

Rota para calcular a média de conclusão das tarefas.
Rota para encontrar a tarefa com a descrição mais longa.
Rota para agrupar tarefas por categoria.
Rota para encontrar a tarefa mais antiga de um usuário.
Observação:
Estas rotas podem ser implementadas utilizando os métodos .map, .filter, .reduce, .some e outros métodos de manipulação de array para alcançar as funcionalidades desejadas, agregando complexidade média a difícil ao projeto. Certifique-se de implementar as devidas verificações de segurança e validação dos dados em cada rota.
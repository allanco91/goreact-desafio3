# GoReact - Desafio 3

## App ReactJS+Redux

- MapGL
- Github api
- react-router-dom
- react-toastify
- styled-components
- duck pattern

## Fluxo

1. O usuário acessa a aplicação;
2. O usuário clica sobre o mapa para adicionar um novo usuário à posição clicada;
3. Um modal abre sobre a tela com um único campo, o username do Github;
4. A aplicação busca informações como nome e avatar do usuário da API do Github
   e salva o usuário no store do Redux;
5. O usuário adicionado agora aparece no mapa e na lista lateral;
6. Caso o usuário digitado no input for inválido é retornado mensagem de erro,
   assim como se tudo ocorrer bem deve é retornada uma mensagem de sucesso;
7. É possível excluir usuários da listagem clicando sobre o “x” na lista lateral
   retornando uma mensagem de sucesso na exclusão;

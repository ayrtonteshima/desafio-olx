#OLX Distance Challenge

##Desafio proposto
Criar uma API Rest que suporte as operações de salvar, mostrar todas e listar palavras semelhantes (até 3 diferenças com valor customizável) com o termo buscado.

##Rodar projeto

```
#!javascript

npm install
npm run migrate
npm start
npm test
```


Para rodar as migrations precisa antes configurar o arquivo do banco


Para executar os testes o projeto (npm start) precisa também estar rodando

Se estiver com configurações padrão, ele vai rodar em http://localhost:3000. Ou caso prefira, defina as variáveis de ambiente PORT e HOST para quais desejar.

##Configurando banco
Utilizei o mysql no projeto pela simplicidade dessa etapa. Gostaria de ter colocado em um ambiente isolado como no Docker mas acabou não dando tempo. O arquivo de configuração fica em: **src/configs/database.json**

Edite esse script antes de rodar o comando 
*npm run migrate*

##Rotas
* GET **/api/v1/words** - Lista todas as palavras salva no banco
* GET **/api/v1/words/{word}** - Lista palavras parecidas com o palavra buscada (threshold 3 como padrão)
* GET **/api/v1/words/{word}/{threshold}** - Lista palavras parecidas com o palavra buscada podendo passar threshold
* POST **/api/v1/words/{word}** - Salva palavra no banco

##Sobre o desafio
Projeto desenvolvido com muito cuidado e amor em javascript/es6, apesar do pouco tempo e disponibilidade. A proposta inicial era fazer com estilo funcional utilizando Ramda onde cabia. O maior desafio seria transpor o algoritmo de busca para funcional com Ramda utilizando as suas características como pure functions, compositions etc. Consegui deixar com estilo funcional porém ainda não foi todo refatorado para Ramda (será meu desafio pós desafio :))

Utilizei o framework Hapi para desenvolver a API, configurar rotas etc. Jasmine para testes junto com frisby que me ajuda a testar a API.

Rodo o eslint todo tempo para deixar o código visualmente agradável e menos propício a erros de transpiladores e minificadores.

O meu task runner é o próprio npm, no package.json listo as tasks necessárias.
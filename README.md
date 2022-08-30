Vue Pokemon
======

Descrição
------

O projeto é um cliente do **Laravel Pokemon** ([[https://gitlab.com/lucas240596/laravel-pokemon](https://github.com/LucasViniciusDev/laravel-pokemon)](https://github.com/LucasViniciusDev/laravel-pokemon)), para ser utilizado primeiro você deve configurar o **Laravel Pokemon**

Este projeto listará todos os pokemons que a **API** fornece, você poderá ver as informações individuais de cada pokemon.

Neste projeto foi utilizado o **VueJS** e **Vuetify** juntamento com **axios** para as requisições **HTTP**

Instalação
------

Primeiro você deverá ter configurado o **Laravel Pokemon** ([[https://gitlab.com/lucas240596/laravel-pokemon](https://github.com/LucasViniciusDev/laravel-pokemon)](https://github.com/LucasViniciusDev/laravel-pokemon))

Após clonar o projeto, instale as dependências com o comando:
```bash
npm install
```

Após instalar as dependências, configure as variaveis de ambiente que se encontra no arquivo **.env**

As variaveis de ambiente sempre são carregas ao iniciar o servidor, caso tenha alguma alteração é necessário reiniciar o serviço.

Você irá configurar o **VUE_APP_API_URL** para informar a **url** do servidor que fornecerá as informações, no caso o **host** e **port** que esta rodando o **Laravel Pokemon**

Por padrão o **VUE_APP_API_URL** virá configurado com **VUE_APP_API_URL="http://localhost:8000/api"** que é o padrão do projeto **Laravel Pokemon**

Após configurado sua variavel de ambiente, inicie o projeto com o comando:
```bash
npm run serve
```

No terminal aparecerá o **host** e a **port** que o projeto está rodando, por padrão será **http://localhost:8080** caso você não tenha nenhum outro projeto rodando nesta porta.

Imagens
------

Screenshots

![Alt text](https://raw.githubusercontent.com/LucasViniciusDev/vue-pokemon/master/screenshots/001.PNG "001")

![Alt text](https://raw.githubusercontent.com/LucasViniciusDev/vue-pokemon/master/screenshots/002.PNG "002")

![Alt text](https://raw.githubusercontent.com/LucasViniciusDev/vue-pokemon/master/screenshots/003.PNG "003")

<p align="center">
    <img alt="Readme" title="Readme GIF" src="./wpp.png" />
</p>

<h1 align="center"> Clone do Whatsapp com ReactJs</h1>

<p align="center">
    <a href="#sobre">Sobre</a> • 
    <a href="#features">Features</a> • 
    <a href="#demo">Demo</a> • 
    <a href="#pre-requisitos">Pré-requisitos</a> • 
    <a href="#tecnologias">Tecnologias</a> • 
    <a href="#licenca">Lincença</a> • 
    <a href="#autor">Autor</a> 
</p>

### Sobre

O projeto "Clone Whatsapp" tem como intuito o meu aprendizado na linguagem javascript e utilizando como framework ReactJs, o aplicativo possui ao maximo ter a mesma interface do própio Whatsapp, onde utiliza-se para autenticação o Facebook através do Firebase, projeto inspirado no professor Bonieky Lacerda, com algumas implementações a mais.

### Features

- [x] Login de usuário pelo Facebook
- [x] Envio de mensagens
- [x] Criação de conversas
- [x] Envio de emojis
- [x] Armazenamento de chat e usuário via Firebase

### Demo
<h1 align="center">
    <img alt="Catalogo de Cursos" title="Catalogo de Cursos" src="./public/img/demo.gif" />
</h1>

<p align="right">
<sub>(Preview)</sub>
</p>

### Pre-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Composer](https://getcomposer.org/), [Framework PHP Laravel](https://laravel.com/). Além disto é bom ter um editor para trabalhar com o código como [VsCode](https://code.visualstudio.com/)

### 👨🏻‍💻 Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/JuniorLima22/catalogoDeCursos-Laravel.git

# Acesse a pasta do projeto no terminal/cmd
$ cd catalogoDeCursos

# Instale as dependências
$ composer install

# criar arquivo .env (pode copiar de .env.example)

# Configure suas variáveis ​​de banco de dados em .env

# Criar um novo esquema no Banco de Dados MySql

# Gerar nova chave
$ php artisan key:generate

# Executar migrations
$ php artisan migrate

# Criar usuário master 
# usuário: admin@email.com e senha: 123456
$ php artisan db:seed --class=UsuarioSeeder

# Execute a aplicação
$ php artisan serve

# O servidor iniciará na porta:8000 - acesse <http://localhost:8000>
```
### Tecnologias

As seguintes ferramentas 🛠 foram usadas na construção do projeto:

<table>
    <tr>
        <td><a href="https://www.php.net/">PHP</a></td>
        <td><a href="https://getcomposer.org/"> Composer</a></td>
        <td><a href="https://laravel.com/">Laravel</a></td>
        <td><a href="https://www.mysql.com/">MySql</a></td>
        <td><a href="https://materializecss.com/">Materialize</a></td>
    </tr>
    <tr>
        <td>7.4.*</td>
        <td>2.0.*</td>
        <td>5.3.*</td>
        <td>6.0.*</td>
        <td>0.100.2</td>
    </tr>
</table>

### Licenca

O catálogo de produtos é um software de código aberto licenciado sob a [MIT license](http://opensource.org/licenses/MIT).

### Referencias

- Udemy

    - [Curso de Introdução ao framework PHP Laravel](https://www.udemy.com/share/101wM23@u-4bc3KSkVgsb-40OxE3AeUg-Trs17MknY8WPJIqRwmX2MQFLbZs8ayDw0X52ml0/) com instrutor [Guilherme Ferreira](https://www.udemy.com/user/guilherme-ferreira-4/)
- Criação do readme
    - Canal no Youtuber [Arthur PC](https://youtu.be/hzXNrOTM3VY) 👏🏻👏🏻
    - Canal no Youtuber [Programador Alternativo](https://youtu.be/HJ16WEmOWTw) 👏🏻👏🏻

### Autor

> Made with 💙 by JUNIOR LIMA 👋 [See my LinkedIn](https://www.linkedin.com/in/junior-lima-495108208/) • GitHub [@JuniorLima22](https://github.com/JuniorLima22)






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

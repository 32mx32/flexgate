# Flexgate
Одностраничное приложение, для рекламы услуг сервиса.
## Приступая к работе
Сперва необходимо склонировать проект командой 
```
git@github.com:32mx32/flexgate.git
```
В проекте есть две основные директории: `client` и `server`.

`client` - это клиентская часть приложения.<br/>
Основной стек:
- pug
- webpack
- JavaScript

`server` - это серверная часть приложения.<br/>
Основной стек:
- ExpressJS
- JavaScript<br/>

Серверная часть приложения необходима для работы с RestApi и выдачи статичой страницы после сборки.

Для запуска проекта необходима [NodeJs](https://nodejs.org) версии 16 и новее.

## Установка зависимостей
Для того чтобы установить зависимости, небходимо запустить команду из корня приложения
```
npm run postinstall
```
это установит зависимости сразу в две директории проекта: `client` и `server`

Также для корректной работы api по отправке данных в Telegram на серверной части, необходимо создать файл
`.env` из файла `.env-example` и заполнить его соответствующими значениями.

## Запуск приложения
Для того чтобы запустить приложение в режиме разработки, необходимо выполнить две команды в двух окнах терминала:

 - для запуска клиентской части
```
npm run dev-client
``` 
  - для запуска серверной части
```
npm run dev-server
```  
Приложение будет запущено по двум адресам:
 - клиентская часть [localhost:3000](http://localhost:3000)
 - серверная часть [localhost:4000](http://localhost:4000)

В данном режиме любые вносимые изменения сразу будут применены и соответствующий сервер будет перезапущен.

## Сборка приложения
Для того чтобы запустить сборку клиентской части, необходимо запустить команду из корня приложения
```
npm run build-client
``` 
Результатом выполнения команды будет папка `build` в корне приложения.

После этого необходимо запустить серверную часть приложения командой:
```
npm run dev-server
``` 
После запуска, сервер будет отдавать собранную клиентскую часть по корневому [url](http://localhost:4000).


# Proyecto en Express, mysql community server
>>- proyecto desarrollado en express utilizando programación orientada a objetos 
>>- utiliza raw sql para las consultas a la base de datos 
>>- proyecto creado para aprender a crear una API RESTFULL en express utilizando programación orientada a objetos 

## Dependencias externas
>>- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
>>>- versión actual: `8.1.0`

## Instalación y uso
>>- ingresa a la carpeta: `cd ./guia_express_mysql` 
>>- instala las dependencias de node: `npm install`
>>- crea una archivo para las variables de entorno: `nvim -p .env` 
### Configuración de variables de entorno 
>- NODE_PORT: puerto del servidor
>- DB_USER = usuario de la base de datos
>- DB_HOST = ip de la base de datos
>- DB_PORT = 3306 por lo general siempre es el mismo
>- DB_PASSWORD = tu contraseña de base de datos
>- BD = nombre de la base de datos

# ==EJM==
```js
 NODE_PORT = 3000
 DB_USER = 'test_user'
 DB_HOST = 'localhost'
 DB_PORT = 3306 
 DB_PASSWORD = '123'
 BD = "test_db"
```

# Journal App
Esta aplicacion es un diario con registro en el que cada usuario que se haya registrado puede almacenar sus notas.

Se divide en **2 rutas principales**, la pagina de autenticacion donde se puede ingresar por medio del login o registrarse segun sea el caso. Y la pagina principal de las notas donde se pueden **crear notas, editar y eliminar**. 

La aplicacion va un poco mas alla en la parte del login permitiendo al usuario registrarse con la **cuenta de google** todo por medio de la utilizacion de **firebase**. 

Constantemente y gracias al patron **redux** la aplicacion esta checkeando el estado de autenticacion del usuario verificando que siempre su sesion **siempre tenga validez**.

La aplicacion contiene un servicio de base de datos en tiempo real llamado Firebase proveido por google.


# Como iniciar la app
Lo primero que debemos hacer es iniciar el comando:
`npm install` Esto para instalar todos los modulos de node incluidos en el package.json.

Para correr la aplicacion se requiere correr el comando `npm run dev`. Luego de esto tendras todo listo para probar la aplicacion.

# Tecnologias utilizadas
1. **React**
2. **Redux**
3. **Firebase**
4. **Mui**
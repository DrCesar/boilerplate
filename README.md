
# Proyecto 1. Boilerplate React

Este repositorio tiene boilerplate para react. Un Boilerplate es un proyecto base, desde el cual uno se puede basar para crear cualquier proyecto.
Este boilerplate cuenta con elementos como redux, react-router, webpack, babel, eslint entre otros.

## Contenido

+ Instalacion
+ Uso de Boilerplate
+ Contribuidores

## Instalacion

Para la installacion del Boilerplate se corren los siguientes comandos. Tomar en cuenta que los programs [git](https://git-scm.com/) y [nodesjs](https://nodejs.org/en/) son necesarios y se toma como si ya estuvieran instalados. Si no es asi ir a la documentacion de cada uno de estos e instalarlos, despues de eso regresar a este paso.

```bash
    git clone https://github.com/DrCesar/boilerplate.git
    cd boilerplate
    npm install
```

## Uso de Boilerplate

Para inicializar el Boilerplate con webpack en modo de desarrollo se usa el siguiente comando en el directorio raiz.

```bash
    npm start
```

La carpeta **src** es donde se encuentra todo el codigo que se va a editar. El archivo index.jsx que se encuentra en esta carpeta es el archivo raiz a partir del cual se arma todo el proyecto.

Las carpetas importantes adentro de **src** son:
+ actions - las acciones para redux
+ components - los componentes de react
+ containers - los containers para los componentes
+ reducers - los reducers para redux

La carpeta components es donde se crean los componentes basicos de React. Si uno no desea usar redux, las otras 3 carpetas no son necesarias. Y solo seria de modificar el archivo **index.jsx** que se encuentra en la carpeta **src**, para que ya no use redux.

Para correr los test, se uso la libreria jest. Con el siguiente commando se corren los tests.

```bash
    npm test
```


## Contribuidores
DrCesar - Josue Jacobs

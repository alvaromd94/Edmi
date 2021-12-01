# EDMI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

--------------------------------------------------------------------------------------------------

EDMI APP - ALVARO MUÑOZ DOMINGUEZ

INSTALACIÓN EN LOCAL
Se ha usado net core + Angular + Sql Server

Si se desea ejecutar y probar la aplicación en local hay que realizar los siguientes pasos:

1.- descargar proyecto backend desde github: https://github.com/alvaromd94/EdmiBackend.git
2.- descargar proyecto frontend desde github: https://github.com/alvaromd94/Edmi.git
3.- descargar fichero sql y lanzarlo en sql server para obtener la misma BD (si se desea):
4.- ejecutar el backend desde visual studio. Copiar la ruta que genere al ejecutar el proyecto.
5.- Pegar la ruta en la aplicación Angular > device.service.ts sustituyéndola por private myAppUrl = 'https://edmibackend20211130223350.azurewebsites.net/api';
6.- Ejecutar el comando npm install desde la ruta donde se descargue el Frontend para instalar los paquetes necesarios
7.- Ejecutar el comando ng serve -o para lanzar la aplicación en modo local.

APLICACIÓN EN PRODUCCIÓN

La aplicación está desplegada en la siguiente ruta:
https://edmidevices.netlify.app/

IMPORTANTE: Iniciar sesión con usuario: admin y password: admin


INFORMACIÓN TÉCNICA

La aplicación se ha desplegado en Azure (backend y BD) y en Netlify (Frontend).

-Se ha usado Angular 12 con Bootstrap 5 y net core 5.
-CanActivate: Se aplica para controlar el acceso a la pantalla principal (device). Por ello, se introduce 
la obligación de un usuario y contraseña (admin/admin) para la correcta validación.
-Formularios reactivos: se aplican tanto en el login como en el device component.
- Uso de pipes para tranformar caracteres a mayúsculas en el listado de Devices.

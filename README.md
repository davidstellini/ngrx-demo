# Casino Demo
This project demonstrates the use of NGRX + Facades pattern by Thomas Burleson [and endorsed by Auth0](https://auth0.com/blog/ngrx-facades-pros-and-cons/).
One of the biggest advantages of using facades can be seen in the Stubs folder, where mocks and testing becomes a breeze.

Demo page: http://davidstellini.github.io/ngrx-demo

Shiny CI badge:
![](https://github.com/davidstellini/ngrx-demo/workflows/Build%20Test%20And%20Deploy/badge.svg)

# Continious Integration 

The project runs build, and tests, on each push.
On each merge to master, it automatically deploys to github pages.

Notes:
- A development/staging environment was not yet set up.
- The app uses a hash routing strategy as a simple way to support reloads on Github pages.
- Unknown sections: "Live" and "Table"



# CLI Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

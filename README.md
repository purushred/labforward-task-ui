# Labforward Code Challenge - UI

This project contains UI codebase for Labforward code challenge.

## Scope of work
UI is developed with Angular material components to support the REST endpoints.
<br> Technology stack: Typescript, Angular 10, Angular Material Design components

## Further enhancements
* Code coverage
* Pagination to navigate Lab notes from UI
* Better UI aesthetics and validations

## Local Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
<br>Also, the following line has to uncomment in [labforward-task](https://github.com/purushred/labforward-task) codebase to integrate with spring-boot backend.
<br>File: `NotesController.java`
<br>Line: `//@CrossOrigin(origins = "http://localhost:4200")`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
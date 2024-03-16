# Angular Blog Platform

## Introduction

In this project, I created a blog platform using Angular 17, focusing on core topics such as Directives, Pipes, Forms, Services, and HTTP operations. Users can create, edit, and delete blog posts. Blog application will use json-server as a mock backend. The project was proposed by Integrify Academy to give the students a guideline to learn Angular 16 but I switched to Angular 17 to learn about the new changes made by Angular.

## Description

On the Blog Platform, users can:

Create a new blog post with a title, author, content, and date.
View a list of all blog posts.
Read the full content of a blog post.
Edit existing posts.
Delete posts.

App outlook:

- notice that no CSS is applied in this project to be focused on other topics

* No routing/navigation applied.
* The main app just displays a list of all blogs.
* Clicking on each row/card (single blog) would show/hide details of that blog.
* In each row/card, there should be an edit/delete button as well.
* Clicking on the edit/delete button should enable the corresponding feature.
* There should be a button to create a new blog in the main app.
* Prerequisites
* Ensure you're familiar with:

Creation of custom directives.
Use of built-in pipes and creation of custom pipes.
Angular Forms: Template-Driven and Reactive Forms.
Form validation and custom validators.
Deep understanding of Angular services and dependency injection.
CRUD operations using the HttpClient module.
Ensure you have json-server installed. If not, install it globally:

Install json-server globally: npm install -g json-server
Run json-server --watch blogs.json or npm run server to start the mock backend server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

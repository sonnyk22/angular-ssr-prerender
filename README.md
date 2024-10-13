# Angular-SSR-Prerender

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

This project is created as a Module-based to mimick existing projects out there.  Standalone is not used in this repo.

## Modules

1) There are 4 Lazy-loaded modules.  They are named with a `+` for more clarity.
2) There are 2 Eager-loaded modules.

## Instrustions

1) npm install
2) npm run serve (to view locally)
3) npm run build - This will create prerenders in the `/dist` folder based on the `routes.txt` file

## Goal

How can we generate when the `id` starts at the beginning of the route url in the `routes-how.txt` file?

This repo is created based on the question in: [Github's link](https://github.com/angular/angular-cli/issues/28591)
# My tests with Cypress Heroes:
I performed my own automated tests with the Cypress Heroes program, creating test cases for login, home page and creating new heroes.

All test cases were documented in Trello, which can be found at the following link:
https://trello.com/invite/b/67da4f016f3243e755331007/ATTI16e0463d1b40f79069489fec98085e4d3F10BE9F/cypress-heroes


# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM.

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.

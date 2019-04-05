# app

A helpful React TypeScript cheatsheet: [React Typescript Cheatsheets](https://github.com/sw-yx/react-typescript-cheatsheet)

## Getting Started

### 1. Clone repository and install dependencies

Clone the repository:

```
git clone git@github.com:syllabus/app.git syllabus
```

Install dependencies and verify project:

```
cd syllabus
yarn
```

### 2. Setup .env files

In each folder (app and api), copy the .env(.development).example to .env(.development).

In the app folder, add the following value:

```
REACT_APP_API_URL=http://localhost:4000/graphql
```

In the api folder, add the following values:

```
PRISMA_SECRET=testing123
APP_SECRET=jwtsecret123
```

### 3. Start API, app, and graphql generation

```
yarn dev
```

## Tools

- [nexus](https://github.com/prisma/nexus)
- [nexus-prisma](https://github.com/prisma/nexus-prisma)
- [yoga2](https://github.com/prisma/yoga2)
- [Prisma](https://prisma.io)

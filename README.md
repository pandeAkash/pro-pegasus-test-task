## Description
A simple nestJS app, for anlayzing the stocks count based on inital stock counts and on going transactions.

## Prerequsite

- [Node](https://nodejs.org/en) is an open-source and cross-platform JavaScript runtime environment.
- [TypeScript](https://www.typescriptlang.org/) strongly typed programming language that builds on JavaScript.
- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Exposed API's

If you are running on locally, you can get sku qunatity count using following API

http://localhost:'PORT'/stock?sku='SKU'

In the above URI, 'PORT' is the port number on which app should run you can set it via `PORT` env and it runs default on 3000.
and 'SKU' is the SKU of the stock you want to anlayze.

## License

Nest is [MIT licensed](LICENSE).

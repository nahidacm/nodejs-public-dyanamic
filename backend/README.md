## Description

NodeJS Hosting Manager API.
Only supported platform is `Linux`.
Initially started with `Ubuntu` latest.

## Installation
This application must run as `root`
```bash
yarn install
npm install -g @nestjs/cli
cp .env-sample .env
yarn prisma migrate dev --name init
```

## Running the app
This application must run as `root`
```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod

# With PM2
./run.sh
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## Database GUI browser
```bash
yarn prisma studio
```
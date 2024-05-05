## BIWTA Dahsboard

### Installation
```bash
git clone https://github.com/nahidacm/biwta-dashboard.git && cd biwta-dashboard
```
#### Backend instllation
```bash
cd backend
```
```bash
yarn install
```
```bash
cp .env-sample .env
```
You may change the port number in `backend/.env` and `frontend/.env` file

Create database tables:
```bash
yarn prisma db push
```

Generate prisma client
```bash
yarn prisma generate
```

Seed some user:
```bash
yarn prisma db seed
```
```bash
yarn start:dev
```
// Or to run with PM2
Development:
```bash
chmod u+x run.sh
./run.sh
```
Production:
```bash
chmod u+x build-run.sh
./build-run.sh
```

This should start the backend NestJS application in http://localhost:3013/


#### Frontend installation
```bash
cd ../frontend
```
```bash
cp .env.sample .env
```
```bash
yarn install
```
```bash
yarn start
```
Or server with react serve
```bash
yarn build
pm2 start "serve -s build" --name biwta-ui
```
This should start the frontend in http://localhost:3000/

You may login with:

**User**: `alice`

**Pass**: `haveapass`


## Redeploy
./deploy.sh


## RTS re-stream installatin
Clone: https://github.com/nahidacm/rts-restream

Then follow the README.

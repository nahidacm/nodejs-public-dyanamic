yarn install
yarn build
pm2 delete biwta-api
pm2 start "yarn start:prod" --name biwta-api
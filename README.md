npm init -y
tsc --init

npm i -D typescript @types/node ts-node-dev ts-jest supertest @types/supertest
npm i jest express

scripts:
dev: tsnd --respawn --transpile-only --cls ./src
start: node ./build
build: tsc

jest --init

test: jest --silent --noStackTrace --runInBand
test:watch: jest --silent --noStackTrace --runInBand -- --watchAll
test:verbose: jest --verbose --runInBand --detectOpenHandles
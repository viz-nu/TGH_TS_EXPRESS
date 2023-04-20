# TGH_TS_EXPRESS
```bash
npm init -y
npm i express
```
add "type":"module" in package.json

```bash
npm i typescript @types/express @types/node
npx tsc --init
```
modify   "module": "ES2020", and   "outDir": "./dist" in tsconfig.json

##to compile and run
```bash
npx tsc
node dist/index.js
```
